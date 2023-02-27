import React from 'react' 
import sofa from '../images/sofa.png'
import envelope_outline from '../images/envelope-outline.svg'
import "../styles/Footer.css"
import "../styles/Style.css"
import { Link } from 'react-router-dom'




const Footer = () => {
  return (
    <footer className="footer-section">
			<div className="container relative">
				<div className="row g-5 mb-5">
					<div className="col-lg-4">
						<div className="mb-4 footer-logo-wrap"><Link href="#" className="footer-logo">M2L<span></span></Link></div>

						<ul className="list-unstyled custom-social">
							<li><Link href="#"><span className="fa fa-brands fa-facebook-f"></span></Link></li>
							<li><Link href="#"><span className="fa fa-brands fa-twitter"></span></Link></li>
							<li><Link href="#"><span className="fa fa-brands fa-instagram"></span></Link></li>
							<li><Link href="#"><span className="fa fa-brands fa-linkedin"></span></Link></li>
						</ul>
					</div>

					<div className="col-lg-8">
						<div className="row links-wrap">
							<div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
									<li><Link href="#">A propos</Link></li>
									<li><Link href="#">Téléphone: 0606060606</Link></li>
									<li><Link href="#">Location: Paris</Link></li>
									<li><Link href="#">Email: m2l@Contact.com</Link></li>
									
								</ul>
							</div>

							<div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
								<li>
									<Link href="#">Services</Link>
									</li>
								</ul>
							</div>

							<div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
								<li>
									<Link href="#">Blog</Link>
								</li>
								</ul>
							</div>

							<div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
								<li><Link href="#">Contact us</Link></li>
								</ul>
							</div>
						</div>
					</div>

				</div>

				<div className="border-top copyright">
					<div className="row pt-4">
						<div className="col-lg-6">
							<p className="mb-2 text-center text-lg-start">Copyright &copy;
            </p>
						</div>

						<div className="col-lg-6 text-center text-lg-end">
							<ul className="list-unstyled d-inline-flex ms-auto">
								<li className="me-4"><Link href="#">Terms &amp; Conditions</Link></li>
								<li><Link href="#">Privacy Policy</Link></li>
							</ul>
						</div>

					</div>
				</div>

			</div>
		</footer>
  )
}

export default Footer;