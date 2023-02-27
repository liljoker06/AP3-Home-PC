import React from 'react'
import { useEffect, useState } from 'react';
import  Axios  from 'axios';




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

  return (
    <div>
      <h1>Liste des produits</h1>
      <ul>
        {produits.map(produit => (
          <li key={produit._id}>
            <h2>{produit.nom}</h2>
            <p>{produit.description}</p>
            <p>Prix : {produit.prix} €</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Produits;