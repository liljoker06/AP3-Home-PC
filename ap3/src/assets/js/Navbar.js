import React from 'react'
import user_svg from '../images/user.svg'
import cart_svg from '../images/cart.svg'
import "../styles/Navbar.css"
import "../styles/Style.css"
import logo from '../images/logo.jpg'



export default function Navbar() {
  return (

    <nav class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">
      <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js'></script>
      <script src="https://kit.fontawesome.com/d8b6aee33e.js" crossorigin="anonymous"></script>

      <div class="container">
        <a class="navbar-brand" href="#nav"><img src={logo} alt="" class="logo" /></a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsFurni">
          <ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li class="nav-item active">
              <a class="nav-link" href="index.html">Accueil</a>
            </li>
            <li>
              <a class="nav-link" href="shop.html">Produit</a>
            </li>
            <li>
              <a class="nav-link" href="about.html">à propos de nous</a>
            </li>
            <li>
              <a class="nav-link" href="services.html">connexion</a>
            </li>
            <li>
              <a class="nav-link" href="blog.html">Nous contacter</a>
            </li>
            <li>
              <a class="nav-link" href="blog.html" id="panier"><i class="fa-sharp fa-solid fa-cart-shopping fa-lg"></i></a>
            </li>

          </ul>


        </div>



      </div>



    </nav>


  )
}