import { Link } from "react-router-dom";
import { useState } from "react";

import Linkedin from "../images/logolinkedin.png"
import Facebook from "../images/logofacebook.png"
import Instagram from "../images/logoinstagram.png"
import Skype from "../images/logoskype.png"
import Twitter from "../images/logotwitter.png"
import Pinterest from "../images/logopinterest.png"

function Footer() {
	const [inputValueFooter, setInputValueFooter] = useState('');

	function addEmailLocalFooter() {

		let dataemail  = JSON.parse(localStorage.getItem('dataemail')); 
            
        if(!dataemail) dataemail = [];
		if(!inputValueFooter || inputValueFooter.length < 10) return

        dataemail.push({email: inputValueFooter});

        localStorage.setItem('dataemail', JSON.stringify(dataemail));

		alert('You are now subscribed to our newsletter');
	}
		return (
			<footer className="footer">
				<div className="footer__page">
					<div className="footer__container">
						<div className="footer__container__column">
							{/* Column1 */}
							<div className="column1">
								<h4>Menu</h4>
								<ul className="column1__list">
									<li><a href="/newArrivals/">New arrivals</a></li>
									<li><a href="/bestSellers/">Best sellers</a></li>
									<li><a href="/allProducts/">All products</a></li>
								</ul>
							</div>

							{/* Column2 */}
							<div className="column2">
								<h4>Categories</h4>
								<ul className="column2__list">
									<li><a href="/plant/">Plant pots</a></li>
									<li><a href="/ceramics/">Ceramics</a></li>
									<li><a href="/tables/">Tables</a></li>
									<li><a href="/chairs/">Chairs</a></li>
									<li><a href="/crockery/">Crockery</a></li>
									<li><a href="/tableware/">Tableware</a></li>
									<li><a href="/cutlery/">Cutlery</a></li>
								</ul>
							</div>

							{/* Column3 */}
							<div className="column3">
								<h4>Our company</h4>
								<ul className="column3__list">
									<li><a href="/about/">About us</a></li>
									<li><a href="/vacancie/">Vacancies</a></li>
									<li><a href="/contacts/">Contact us</a></li>
									<li><a href="/privacy/">Privacy</a></li>
									<li><a href="/returns/">Returns policy</a></li>
								</ul>
							</div>
						</div>

						<div className="footer__container__signup__form">
							<h4>Join our mailing list</h4>
							<div className="footer__signup__form">
								<input value={inputValueFooter} onChange={e => {setInputValueFooter(e.target.value)}} required type="text" name="email" placeholder="your@email.com"></input>
								<button onClick={addEmailLocalFooter}>Sign up</button>
							</div>
						</div>
					</div>
					<div className="footer__container__social__network">
							<span>Copyright 2022 Avion LTD</span>

							<div className="social__network__list">
								<ul className="list__social">
									<li><a href="https://ru.linkedin.com/" target="blank"><img src={Linkedin} alt="#"></img></a></li>
									<li><a href="https://www.facebook.com/" target="blank"><img src={Facebook} alt="#"></img></a></li>
									<li><a href="https://www.instagram.com/" target="blank"><img src={Instagram} alt="#"></img></a></li>
									<li><a href="https://www.skype.com/ru/" target="blank"><img src={Skype} alt="#"></img></a></li>
									<li><a href="https://twitter.com/?lang=ru" target="blank"><img src={Twitter} alt="#"></img></a></li>
									<li><a href="https://www.pinterest.com/" target="blank"><img src={Pinterest} alt="#"></img></a></li>
								</ul>
							</div>
					</div>
				</div>
			</footer>
		);
	}
	
	export default Footer;