import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { FaTrash, FaPen } from 'react-icons/fa';
import AdminBar from './AdminBar';
import '../styles/AdminCard.css';




export default function ProduitAdmin() {
    const [utilisateurs, setUtilisateurs] = useState([])
    const [affichage, setAffichage] = useState(false)

    const recup = async () => {
        await axios.get(`http://localhost:3001/user`)
            .then(res => {
                console.log(res)
                setUtilisateurs(res.data)
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
                    utilisateurs.map(utilisateur => (
                        <div key={`utilisateur-${utilisateur.id}`}>
                          <div className='box-title' >
                                 utilisateur {utilisateur.id} 
                            </div>
                            <div className='box-body'>
                                <p>Nom : {utilisateur.Nom}<br/> </p>
                                <p>Prenom : {utilisateur.Prenom}<br/></p>
                                <p>Email: {utilisateur.Email}<br/></p>
                            </div>
                            <div className='box-link1'>
                                <Link to={'/UserModif/' +  utilisateur.id}><FaPen /></Link>
                                <Link to={'/Supprimer/'+ utilisateur.id}><FaTrash /></Link>
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