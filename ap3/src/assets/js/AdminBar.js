import React from "react";
import "../styles/Navbar.css"
import "../styles/Style.css"
import logo from '../images/logo.jpg'

import { useNavigate } from "react-router-dom";


import { Container, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const AdminBar = () =>{

  let navigate = useNavigate();
  const deco = () => {
    localStorage.clear();
    if (localStorage < 1){
      navigate("/Connexion")
    }
  };

    return(
        <NavbarBs className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">
        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js'></script>
        <script src="https://kit.fontawesome.com/d8b6aee33e.js" crossOrigin="anonymous"></script>
  
        <Container>
          <a className="navbar-brand" href="#nav"><img src={logo} alt="" className="logo" /></a>
  
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="">
                <NavLink className="nav-link" to="/">Accueil</NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/About">à propos de nous</NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to ='/Ajouter'>Ajout Articles</NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to ='/UserAjouter'>Nouveau utilisateur</NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to ='/Admin'>Produit</NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to ='/User'>Utilisateur</NavLink>
              </li>
              <li>
              <NavLink className="nav-link" to='/Connexion' onClick={deco}>Déconnexion</NavLink>
              </li>
            </ul>
            
  
  
          </div>
  
  
  
        </Container>
  
  
  
      </NavbarBs>

    )
}

export default AdminBar