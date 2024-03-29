import React from 'react'
import "../styles/Navbar.css"
import "../styles/Style.css"
import logo from '../images/logo.jpg'



import { Button, Container, Navbar as NavbarBs } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

const  NavbarClient =() => {

  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart && cart.length > 0) {
      setCartItems(cart);
    }
  }, []);


  let navigate = useNavigate();
  const deco = () => {
    localStorage.clear();
    if (localStorage < 1){
      navigate("/Connexion")
    }
  };

  const getItemsQuantity = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let totalQuantity = 0;
    
    cartItems.forEach((produit) => {
      const quantity = parseInt(produit.quantity);
      if (!isNaN(quantity)) {
        totalQuantity += quantity;
      }
    });
  
    return totalQuantity;
  };
  
  return (

    <NavbarBs className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">
      <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js'></script>
      <script src="https://kit.fontawesome.com/d8b6aee33e.js" crossOrigin="anonymous"></script>

      <Container>
        <NavLink to="/"><a className="navbar-brand" href="#nav"><img src={logo} alt="" className="logo" /></a></NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className="">
              <NavLink className="nav-link" to="/">Accueil</NavLink>
            </li>
            <li>
              <NavLink className="nav-link"  to = "/Produit" as ={NavLink}>
                Produit
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/About">à propos de nous</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to ='/Support'>Nous contacter</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to='/Connexion' onClick={deco}>Déconnexion</NavLink>
            </li>
            <li>
          <Link to="/Panier">
          <Button
            style={{ height: "3rem", position: "relative", background : "#f9bf29", borderColor: "#f9bf29" }}
            variant="outline-primary"
            className="rounded-circle"
            onClick=""
          >
            <i class="fa-solid fa-cart-shopping" style={{color : "#cc0808"}}></i>
            <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center ' style={{position:"absolute", width:"1.5rem", height:"1.5rem", bottom:0, right:0, transform:"translate(25%, 25%)",}}>
            {getItemsQuantity()}
            </div>
          </Button>
          </Link>
            </li>
          </ul>
          


        </div>



      </Container>



    </NavbarBs>


  )
}

export default NavbarClient