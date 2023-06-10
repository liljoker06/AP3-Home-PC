import React from 'react'
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Button, Card, Container, Row } from 'react-bootstrap';
import NavbarClient from './ClientBar';



function Produits() {
  let ls = localStorage;

  
  const [produits, setProduits] = useState([]);
  const [,updateState] = React.useState("1");
  const forceUpdate = React.useCallback(() => updateState({}), []);


  useEffect(() => {
    Axios.get('http://localhost:3001/produit')
      .then(response => {
        setProduits(response.data);
      })
      .catch(error => {
        console.log('Erreur de récupération des produits : ', error);
      });

      
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getItemsQuantiy = (id) => {
    ls.getItem(id)
    return produits.find((produit) => produit.id === id)?.quantity || 0
  };

  const increaseCardQuantity = (id) => {
    console.log(id)
    const calculPositif = (id) => {
      const produitFound = produits.find(produit => produit.id === id);
      if (!produitFound) {
        
        return [...produits, { id, quantity: 1 }]
      }else{
        if(!produitFound.quantity){
          produitFound.quantity = 1;
          ls.setItem(id,produitFound.quantity)
          console.log("je suis la",produits, ls) 
        }else{
          produitFound.quantity++
          ls.setItem(id,produitFound.quantity)
          console.log("je suis la X2", produits, ls)
        }
        ls.setItem("cart", JSON.stringify(produits));
        return (
          produits
        )
      }
    }
    setProduits(calculPositif(id));
    forceUpdate();
  }

  const decreaseCardQuantity = (id) => {
    console.log(id)
    const calculnegatif = (id) => {
      const produitFound = produits.find(produit => produit.id === id);
      if (!produitFound) {
        
        return [...produits, { id, quantity: 0 }]
      }else{
        if(!produitFound.quantity){
          produitFound.quantity = 0;
          ls.setItem(id,produitFound.quantity)
          console.log("je suis la",produits, ls) 
        }else{
          produitFound.quantity--
          ls.setItem(id,produitFound.quantity)
          console.log("je suis la X2", produits, ls)
        }
        ls.setItem("cart", JSON.stringify(produits));
        return (
          produits
        )
      }
    }
    setProduits(calculnegatif(id));
    forceUpdate();
  }

  const deleteCardQuantity = (id) => {
    console.log(id)
    const calculnegatif = (id) => {
      const produitFound = produits.find(produit => produit.id === id);
      if (!produitFound) {
        
        return [...produits, { id, quantity: 0 }]
      }else{
        if(produitFound.quantity){
          produitFound.quantity = 0;
          ls.removeItem(id,produitFound.quantity)
          console.log("je suis la",produits, ls) 
        }
        ls.setItem("cart", JSON.stringify(produits));
        return (
          produits
        )
      }
    }
    setProduits(calculnegatif(id));
    forceUpdate();
  }


  return (
    <div>
      <NavbarClient/>
    <Container className='body'>
      <h1>Liste des produits</h1>
      <Row>
        {
          produits.map((produit,index) =>
            <Card key={index} style={{ width: '18rem' }} className="text-center">
              <Card.Header>{produit.nom}</Card.Header>
              <Card.Img variant="top" alt={produit.nom} src={`${process.env.PUBLIC_URL}/${produit.imgUrl}`} />
              <Card.Body>
                <Card.Text>
                </Card.Text>
              </Card.Body>
              <Card.Footer className='text-muted'>
                {produit.prix} € <br />
                {getItemsQuantiy(produit.id) === 0 ? (
                  <Button variant='w-100' onClick={() => increaseCardQuantity(produit.id)} > ajouter au panier</Button>
                ) : (
                  <div className='d-flex align-items-center flex-column'>
                    <div className='d-flex align-items-center justify-content-center'>
                      <Button onClick={() => decreaseCardQuantity(produit.id)} > - </Button>
                      <span className='fs-3'>{getItemsQuantiy(produit.id)}</span>
                      <Button onClick={() => increaseCardQuantity(produit.id)}> + </Button>
                    </div>
                    <Button onClick={() => deleteCardQuantity(produit.id)} > supprimer </Button>
                  </div>
                )}
              </Card.Footer>
            </Card>
          )
        }
      </Row>
    </Container>
  </div>
  );
}

export default Produits;