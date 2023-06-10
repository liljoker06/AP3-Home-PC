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


import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import NavbarClient from './ClientBar';

function Panier() {
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart && cart.length > 0) {
      setCartItems(cart);
    }
  }, []);

  const getTotalAmount = () => {
    let total = 0;
    if (cartItems && cartItems.length > 0) {
      cartItems.forEach((produit) => {
        if (produit.id) {
          total += produit.prix * produit.id;
        }
      });
    }
    return total;
  };

  const handleCheckout = () => {
    localStorage.removeItem('cart');
    alert('Commande finalisée !');
  };

  const handleDebugClearCart = () => {
    localStorage.removeItem('cart');
    alert('Le panier a été vidé !');
  };

  const getItemsQuantiy = (id) => {
    localStorage.getItem(id)
    return cartItems.find((produit) => produit.id === id)?.quantity || 0
  };

  return (
    <div className="container">
      <NavbarClient/>
      <h1>Panier</h1>
      {cartItems && cartItems.length > 0 ? (
        <div>
          <ul className="list-group">
            {cartItems.map((produit, index) => (
              <li key={index} className="list-group-item">
                <Card style={{width: '18rem'}} className='text-center'>
                <h5>{produit.nom}</h5>
                <img alt={produit.nom} src={`${process.env.PUBLIC_URL}/${produit.imgUrl}`}></img>
                <p>Prix unitaire: {produit.prix}€</p>
                <p>Quantité: {getItemsQuantiy(produit.id)}</p>
                <p>Montant: {produit.prix * getItemsQuantiy(produit.id)}€</p>
                <button >Diminuer</button>
                <button >Augmenter</button>
                <button >Supprimer</button>
                </Card>
              </li>
            ))}
          </ul>
          <h4>Montant total: {getTotalAmount()}€</h4>
          <button className="btn btn-primary" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      ) : (
        <p>Votre panier est vide.</p>
      )}
      <button className="btn btn-danger" onClick={handleDebugClearCart}>
        Vider le panier (Debug)
      </button>
    </div>
  );
}
export default Panier;