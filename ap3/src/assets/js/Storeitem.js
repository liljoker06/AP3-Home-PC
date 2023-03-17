import React from 'react'
import { useEffect, useState } from 'react';
import  Axios  from 'axios';
import { Button, Card, Container, Row } from 'react-bootstrap';




function Produits() {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/produit')
      .then(response => {
        setProduits(response.data);
      })
      .catch(error => {
        console.log('Erreur de récupération des produits : ', error);
      });
  }, []);

  const quantity = 1;
  return (
    <Container className='body'>
    <h1>Liste des produits</h1>
    <Row>
        {
        produits.map(produit => 
          <Card key={produit._id} style={{width : '18rem'}} className ="text-center">
            <Card.Header>{produit.nom}</Card.Header>
            <Card.Img   variant = "top" alt ={produit.nom} src={`${process.env.PUBLIC_URL}/${produit.imgUrl}`}/>
            <Card.Body>
              <Card.Text>
                {produit.description}
              </Card.Text>
              <Card.Text>
              </Card.Text>
            </Card.Body>
            <Card.Footer  className='text-muted'>
                {produit.prix} € <br/>
                {quantity === 0 ? (
                  <Button variant = 'w-100'> ajouter au panier</Button>
                ) : (
                  <div className='d-flex align-items-center flex-column'>
                  <div className='d-flex align-items-center justify-content-center'>
                    <Button> - </Button>
                    <span className='fs-3'> 1 Article </span>
                    <Button> + </Button>
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
  );
}

export default Produits;