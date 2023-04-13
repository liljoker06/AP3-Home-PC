import React from "react";

const Admin = () =>{
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
                <NavLink className="nav-link" to='/Connexion'>Connexion</NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to ='/Support'>Admin</NavLink>
              </li>
              <li>
              
            <Button
              style={{ height: "3rem", position: "relative", background : "#f9bf29", borderColor: "#f9bf29" }}
              variant="outline-primary"
              className="rounded-circle"
              onClick=""
            >
              <i class="fa-solid fa-cart-shopping" style={{color : "#cc0808"}}></i>
              <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center ' style={{position:"absolute", width:"1.5rem", height:"1.5rem", bottom:0, right:0, transform:"translate(25%, 25%)",}}>
                3
              </div>
            </Button>
              </li>
            </ul>
            
  
  
          </div>
  
  
  
        </Container>
  
  
  
      </NavbarBs>

    )
}

export default Admin 