import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { FaTrash, FaPen } from 'react-icons/fa';
import AdminBar from './AdminBar';
import '../styles/AdminCard.css';

import { Card  } from 'react-bootstrap';


export default function ProduitAdmin() {
    const [produits, setProduits] = useState([])
    const [affichage, setAffichage] = useState(false)

    const recup = async () => {
        await axios.get(`http://localhost:3001/articles`)
            .then(res => {
                console.log(res)
                setProduits(res.data)
                setAffichage(true)
            })
    }

    useEffect(() => {
        recup()
    }, [])

    

    return (
        <div>
          <AdminBar/>
        <div className='body'>
            <h2> Les Produit</h2>
            <div className="boxarticles">
                {affichage ?
                    produits.map(produit => (
                        <div key={`produit-${produit.id}`}>
                          <div className='box-title' >
                                Articles n° {produit.id}  {produit.nom}
                            </div>
                            <div className='box-body'>
                                {produit.prix} €
                                <br />
                                <Card.Img variant="top" alt={produit.nom} src={`${process.env.PUBLIC_URL}/${produit.imgUrl}`} />
                                <br />
                                {produit.quantity}
                            </div>
                            <div className='box-link1'>
                                <Link to={'/Modifier' +  produit.id}><FaPen /></Link>
                                <Link to={'/Supprimer'+ produit.id}><FaTrash /></Link>
                            </div>
                        </div>
                    ))
                    : <p>Chargement...</p>
                    }
            </div>
        </div>
        </div>
    )
}