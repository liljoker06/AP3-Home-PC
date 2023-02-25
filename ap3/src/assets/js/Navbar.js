import React from 'react'
import user_svg from '../images/user.svg'
import cart_svg from '../images/cart.svg'
import "../styles/Navbar.css"
import "../styles/Style.css"
import logo from '../images/logo.jpg'
import { Link } from 'react-router-dom'



const  Navbar =() => {
  return (

    <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">
      <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js'></script>
      <script src="https://kit.fontawesome.com/d8b6aee33e.js" crossOrigin="anonymous"></script>

      <div className="container">
        <a className="navbar-brand" href="#nav"><img src={logo} alt="" className="logo" /></a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Accueil</Link>
            </li>
            <li>
              <Link className="nav-link"  to = "/Produit">Produit</Link>
            </li>
            <li>
              <Link className="nav-link" to="About">à propos de nous</Link>
            </li>
            <li>
              <Link className="nav-link" to='/Connexion'>Connexion</Link>
            </li>
            <li>
              <Link className="nav-link" to='/Inscription'>Inscription</Link>
            </li>
            <li>
              <a className="nav-link" href="blog.html">Nous contacter</a>
            </li>
            <li>
              <a className="nav-link" href="blog.html" id="panier"><i className="fa-sharp fa-solid fa-cart-shopping fa-lg"></i></a>
            </li>

          </ul>
          


        </div>



      </div>



    </nav>


  )
}

export default Navbar