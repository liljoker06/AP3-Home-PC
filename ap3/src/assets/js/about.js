import React from 'react'
import "../styles/About.css"
import "../styles/Style.css"
import logo from "../images/About.png"
import enfant from "../images/enfant.png";
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';


const about =() => {
    return (
        <div>
            <Navbar/>
        <div class="hero" id ="nav">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-lg-5">
                    <div class="intro-excerpt">
                        <h1>M2L.<span class="d-block"></span></h1>
                        <p class="mb-4" style={{color :"#fffff"}}><strong>La MAISON DES LIGUES DE LA LORAINNE, établissement du Conseil Régional de Lorraine, est responsable de la gestion du service des sports et en particulier des ligues sportives ainsi que d’autres structures hébergées. La M2L doit fournir les infrastructures matérielles, logistiques et des services à l’ensemble des ligues sportives installées. Elle assure l’offre de services et de support technique aux différentes ligues déjà implantées (ou à venir) dans la région. </strong></p>
                        <NavLink to="/Connexion"><a href="a" class="btn btn-secondary me-2">Voir nos produits </a></NavLink>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="hero-img-wrap">
                        <img src={logo} alt="" class="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-lg-5">
                    <div class="intro-excerpt">
                    <img src={enfant} alt="" class="img-fluid" />
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="intro-excerpt">
                        <h3 style ={{color : "white"}}>Si vous souhaitez nous faire un Don n'hésitez pas de nous écrire un message<span class="d-block"></span></h3>
                        <NavLink to="/Support"><a href="a" class="btn btn-secondary me-2">Contactez Nous</a></NavLink>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>

    )
}

export default about