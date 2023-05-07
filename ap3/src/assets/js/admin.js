import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { FaTrash, FaPen } from 'react-icons/fa';
import AdminBar from './AdminBar';
import '../styles/AdminCard.css';

import {Card} from 'react-bootstrap';


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
                        <Card key={`produit-${produit.id}`} style={{ width: '18rem' }} className="text-center">
                          <div className='box-title' >
                                Articles n° {produit.id}  
                            </div>
                            <Card.Header>{produit.nom}</Card.Header>
                            <div className='box-body'>
                                {produit.prix} €
                                <br />
                                <Card.Img variant="top" alt={produit.nom} src={`${process.env.PUBLIC_URL}/${produit.imgUrl}`} />
                                <Card.Body>
                                <Card.Text>
                                </Card.Text>
                                </Card.Body>
                                Stock : {produit.quantityP}
                            </div>
                            <Card.Footer className='text-muted'>
                            <div className= 'd-flex align-items-center flex-column'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <Link to={'/Modifier/' +  produit.id}><FaPen size={32} color='red'/></Link>
                                <Link to={'/Supprimer/'+ produit.id}><FaTrash size={32} color='red' /></Link>
                            </div>
                            </div>
                            </Card.Footer>
                        </Card>
                    ))
                    : <p>Chargement...</p>
                    }
            </div>
        </div>
        </div>
    )
}