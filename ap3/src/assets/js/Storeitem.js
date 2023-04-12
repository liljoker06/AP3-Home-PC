import React from 'react'
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Button, Card, Container, Row } from 'react-bootstrap';
import NavbarClient from './ClientBar';



function Produits() {
  const [produits, setProduits] = useState([]);
  const [, updateState] = React.useState("1");
  const forceUpdate = React.useCallback(() => updateState({}), []);

  useEffect(() => {
    Axios.get('http://localhost:3001/produit')
      .then(response => {
        setProduits(response.data);
      })
      .catch(error => {
        console.log('Erreur de récupération des produits : ', error);
      });
  }, []);

  const getItemsQuantiy = (id) => {
    return produits.find((produit) => produit.id === id)?.quantity || 0
  };

  const increaseCardQuantity = (id) => {
    const calculPositif = (id) => {
      const produitFound = produits.find(produit => produit._id === id);
      if (!produitFound) {
        
        return [...produits, { id, quantity: 1 }]
      }else{
        if(!produitFound.quantity){
          produitFound.quantity = 1;
          console.log("je suis la",produits) 
        }else{
          produitFound.quantity++
          console.log("je suis la X2", produits)
        }
        return (
          produits
        )
      }
    }
    setProduits(calculPositif(id));
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
                  {produit.description}
                </Card.Text>
                <Card.Text>
                </Card.Text>
              </Card.Body>
              <Card.Footer className='text-muted'>
                {produit.prix} € <br />
                {getItemsQuantiy(produit._id) === 0 ? (
                  <Button variant='w-100' onClick={() => increaseCardQuantity(produit._id)} > ajouter au panier</Button>
                ) : (
                  <div className='d-flex align-items-center flex-column'>
                    <div className='d-flex align-items-center justify-content-center'>
                      <Button> - </Button>
                      <span className='fs-3'>{getItemsQuantiy(produit._id)}</span>
                      <Button onClick={() => increaseCardQuantity(produit._id)}> + </Button>
                    </div>
                    <Button> supprimer </Button>
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