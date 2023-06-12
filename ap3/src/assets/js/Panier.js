// import '../styles/Panier.css'
// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import NavbarClient from './ClientBar';

// export default function Panier({count,destock}) {
//   localStorage.clear();

//   const [produits, setProduits] = useState([])
//   const [affichage, setAffichage] = useState(false)

//     const recup = async () => {
//       await axios.get(`http://localhost:3001/produit`)
//           .then(res => {
//               console.log(res)
//               setProduits(res.data)
//               setAffichage(true)
//           })
//   }

//   useEffect(() => {
//     recup()
// }, [])

//     return (
//         <div>
//         <NavbarClient/>
//       <div id="lateral-panel">   
//         <input id="lateral-panel-input" type="checkbox">
//         </input>
//         <label id="lateral-panel-label" for="lateral-panel-input">
//         </label>
//         <div id="lateral-panel-bloc">
//           <div className="panier">
//             <h3>Mon panier</h3>
//             <div>
//             {
//               produits.map(produit => (
//                   <div key={`produit-${produit.id}`} className="box">

//                       <div className='box-body'>
//                           <p>{produit.nom} : {destock}</p>
//                       </div>

//                       <button type="button" onClick={() => count - produit.prix}>
//                         -
//                       </button>
//                   </div>
//               ))}
//             </div>

//             <br/>
//             {<p>Total : {count} €</p>}
//             <button type='button' name='payer'>
//               Payer
//             </button>
//           </div>
//         </div>
//       </div>
//       </div>
//     )
//   }


// import React, { useState, useEffect } from 'react';
// import { Button, Card, } from 'react-bootstrap';
// import NavbarClient from './ClientBar';


// function Panier() {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const cart = JSON.parse(localStorage.getItem('cart'));
//     if (cart && cart.length > 0) {
//       setCartItems(cart);
//     }
//   }, []);

  // const getTotalAmount = () => {
  //   let total = 0;
  //   if (cartItems && cartItems.length > 0) {
  //     cartItems.forEach((produit) => {
  //       if (produit.id) {
  //         total += produit.prix * produit.id;
  //       }
  //     });
  //   }
  //   return total;
  // };

  // const handleCheckout = () => {
  //   localStorage.removeItem('cart');
  //   alert('Commande finalisée !');
  // };

//   const handleDebugClearCart = () => {
//     localStorage.removeItem('cart');
//     alert('Le panier a été vidé !');
//   };

//   const getItemsQuantiy = (id) => {
//     localStorage.getItem(id)
//     return cartItems.find((produit) => produit.id === id)?.quantity || 0
//   };

//   return (
//     <div>
//       <NavbarClient />
//       <div className="container">

//         <h1>Panier</h1>
      
//         {cartItems && cartItems.length > 0 ? (
//           <div className='row'>
            
//               {cartItems
//                 .filter(produit => getItemsQuantiy(produit.id) > 1)
//                 .map((produit, index) => (
                  
//                   < Card key={index} style={{ width: '18rem' }} className="text-center">
//                       <Card.Header>{produit.nom}</Card.Header>
//                       <Card.Img alt={produit.nom} src={`${process.env.PUBLIC_URL}/${produit.imgUrl}`}/>
//                       <Card.Body>
//                         <Card.Text>
//                         </Card.Text>
//                       </Card.Body>
//                       <Card.Footer className='text-muted'>
//                       <p>Prix unitaire: {produit.prix}€</p>
//                       <p>Quantité: {getItemsQuantiy(produit.id)}</p>
//                       <p>Montant: {produit.prix * getItemsQuantiy(produit.id)}€</p>
                      
                      
//                       <Button className="btn btn-primary" style={{fontSize : "10px"}}>Diminuer</Button>
//                       <Button  className="btn btn-primary" style={{fontSize : "10px"}}>Augmenter</Button>
//                       <Button  className="btn btn-primary"  style={{fontSize : "10px"}}>Supprimer</Button>
                      
                      
//                       </Card.Footer>
//                     </Card>
//                 ))}
             
//             <h4>Montant total: {getTotalAmount()}€</h4>
//             <button className="btn btn-primary" onClick={handleCheckout}>
//               Checkout
//             </button>
//           </div>
//         ): (
//           <p>Votre panier est vide.</p>
//         )}
//         <button className="btn btn-danger" onClick={handleDebugClearCart}>
//           Vider le panier (Debug)
//         </button>
//       </div>
//     </div> 
//   );
// }
// export default Panier;

import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import NavbarClient from './ClientBar';

function Panier() {
  const [cartItems, setCartItems] = useState([]);
  const [productItems, setProductItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cartData);

    const productData = JSON.parse(localStorage.getItem('product')) || [];
    setProductItems(productData);
  }, []);

  useEffect(() => {
    calculateTotal();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);

  const calculateTotal = () => {
    let total = 0;
    for (const product of cartItems) {
      const productData = getProductById(product.id);
      total += productData.prix * product.quantity;
    }
    setTotal(total);
  };


  const getProductById = (id) => {
    return productItems.find((product) => product.id === id);
  };

  const handleCheckout = () => {
    localStorage.removeItem('cart');
    alert('Commande finalisée !');
  };



  return (
    <div>
    <NavbarClient/>
    <Container className="body">

      <h1>Panier</h1>
      <Row>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide.</p>
        
      ) : (
        <div className='row'>
          {cartItems.map((produit, index) => {
            const product = getProductById(produit.id);
            return (
              <Card key={index} style={{ width: '18rem' }} className="text-center">
                <Card.Header>{product.nom}</Card.Header>
                <Card.Img variant="top" alt={product.nom} src={`${process.env.PUBLIC_URL}/${product.imgUrl}`} />
                <Card.Body>
                  <Card.Text>
                    Quantité : {produit.quantity}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                  Prix unitaire : {product.prix} € <br/>
                  Montant: {product.prix * produit.quantity}€
                </Card.Footer>
              </Card>
      
            
            
            );
          })}
        </div>
      )}
      </Row>
    </Container>
    <h4>Montant total: {total}€</h4>
    <div>
          <Button onClick={handleCheckout}>
                  Acheter
              </Button>
          </div>
    </div>
  );
}

export default Panier;
