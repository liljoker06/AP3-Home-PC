// import React, { useState } from 'react'
// import product_1 from '../images/product-1.png'
// import product_2 from '../images/product-2.png'
// import product_3 from '../images/product-3.png'
// import cross from '../images/cross.svg'
// import "../styles/Body.css"
// import "../styles/Style.css"
// import { Link } from 'react-router-dom'
// import Header from './Header';


// const Body = () =>{
//     const [produit, setQuiz ] =  useState([])

// 	return ( 
// 		<div className="product-section">
// 			<div className="container">
// 				<div className="row">


// 					<div className="col-md-14 col-lg-3 mb-5 mb-lg-0">
// 						<h2 className="mb-4 section-title">Crafted with excellent material.</h2>
// 						<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
// 						<p><Link to="shop.html" className="btn">Explore</Link></p>
// 					</div>


// 					<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
// 						<Link className="product-item" to="cart.html">
// 							<img  alt =""src={product_1}  className="img-fluid product-thumbnail" />

// 							<h3 className="product-title">Nordic Chair</h3>
// 							<strong className="product-price">$50.00</strong>

// 							<span className="icon-cross">
// 								<img  alt=""src={cross} className="img-fluid" />
// 							</span>
// 						</Link>
// 					</div>

// 					<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
// 						<Link className="product-item" to="cart.html">
// 							<img alt =""src={product_2} className="img-fluid product-thumbnail" />
// 							<h3 className="product-title">Kruzo Aero Chair</h3>
// 							<strong className="product-price">$78.00</strong>

// 							<span className="icon-cross">
// 								<img  alt=""src={cross} className="img-fluid" />
// 							</span>
// 						</Link>

// 					</div>
// 					<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
// 						<Link className="product-item" to="cart.html">
// 							<img alt="" src={product_3} className="img-fluid product-thumbnail"/>
// 							<h3 className="product-title">Ergonomic Chair</h3>
// 							<strong className="product-price">$43.00</strong>

// 							<span className="icon-cross">
// 								<img alt =""  src={cross} className="img-fluid"/>
// 							</span>
// 						</Link>
// 					</div>
// 					<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
// 						<Link className="product-item" to="cart.html">
// 							<img  alt = "" src={product_3} className="img-fluid product-thumbnail"/>
// 							<h3 className="product-title">Ergonomic Chair</h3>
// 							<strong className="product-price">$43.00</strong>

// 							<span className="icon-cross">
// 								<img alt ="" src={cross} className="img-fluid"/>
// 							</span>
// 						</Link>
// 					</div>
// 					<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
// 						<Link className="product-item" to="cart.html">
// 							<img  alt ="" src={product_3} className="img-fluid product-thumbnail"/>
// 							<h3 className="product-title">Ergonomic Chair</h3>
// 							<strong className="product-price">$43.00</strong>

// 							<span className="icon-cross">
// 								<img alt ="" src={cross} className="img-fluid"/>
// 							</span>
// 						</Link>
// 					</div>
// 					<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
// 						<Link className="product-item" to="cart.html">
// 							<img alt ="" src={product_3} className="img-fluid product-thumbnail"/>
// 							<h3 className="product-title">Ergonomic Chair</h3>
// 							<strong className="product-price">$43.00</strong>

// 							<span className="icon-cross">
// 								<img alt = "" src={cross} className="img-fluid"/>
// 							</span>
// 						</Link>
// 					</div>
// 					<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
// 						<Link className="product-item" to="cart.html">
// 							<img alt = "" src={product_3} className="img-fluid product-thumbnail"/>
// 							<h3 className="product-title">Ergonomic Chair</h3>
// 							<strong className="product-price">$43.00</strong>

// 							<span className="icon-cross">
// 								<img alt= ""src={cross} className="img-fluid"/>
// 							</span>
// 						</Link>
// 					</div>
// 					<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
// 						<Link className="product-item" to="cart.html">
// 							<img alt= ""src={product_3} className="img-fluid product-thumbnail"/>
// 							<h3 className="product-title">Ergonomic Chair</h3>
// 							<strong className="product-price">$43.00</strong>

// 							<span className="icon-cross">
// 								<img alt=""src={cross} className="img-fluid"/>
// 							</span>
// 						</Link>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
        

// 	)
// }

// export default Body