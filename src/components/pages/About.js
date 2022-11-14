import { useState } from "react";

function About() {
	const [inputValue, setinputValue] = useState();
	
	function contact() {
		window.location.href="/contacts/"
	}
	
	function addEmailLocal() {
		let dataemail  = JSON.parse(localStorage.getItem('dataemail')); 
            
        if(!dataemail) dataemail = [];
		if(!inputValue || inputValue.length < 10) return

        dataemail.push({email: inputValue});

        localStorage.setItem('dataemail', JSON.stringify(dataemail));

		alert('You are now subscribed to our newsletter');
	}

	return (
	  <div className="about__pages">
		<div className="about__header">
			<h2>A brand built on the love of craftmanship,<br></br>quality and outstanding customer service</h2>
		</div>

		<div className="about__features1">
			<div className="features1__container__list">
				<div className="container__list__content">
					<h3>From a studio in London to a global brand withover 400 outlets</h3>
					<p>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
					<p>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
				
					<button onClick={contact} className="container__content__btn">Get in touch</button>
				</div>
			</div>
			<div className="features1__img"></div>
		</div>

		<div className="about__features2">
			<div className="features2__img"></div>
				<div className="features2__container__list">
					<div className="container__list__content2">
						<h3>Our service isn't just personal, it's actuallyhyper personally exquisite</h3>
						<p>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
						<p>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
						
						<button onClick={contact} className="container__content__btn">Get in touch</button>
					</div>
				</div>
		</div>
		
		<div className="page__home__features__top">
					<h3 className="features__top__title">What makes our brand different</h3>

					<div className="features__list">
						<ul className="features__list__colomn" >
							<li className="list__colmn">
								<div className="colmn__item">
									<div className="colomn__icon1"></div>
										<h3>Next day as standard</h3>
										<p>Order before 3pm and get your order the next day as standard</p>
								</div>
							</li>

							<li className="list__colmn">
								<div className="colmn__item">
									<div className="colomn__icon2"></div>								
										<h3>Made by true artisans</h3>
										<p>Handmade crafted goods made with real passion and craftmanship</p>
								</div>
							</li>

							<li className="list__colmn">
								<div className="colmn__item">
									<div className="colomn__icon3"></div>
										<h3>Unbeatable prices</h3>
										<p>For our materials and quality you won't find better prices anywhere</p>
								</div>
							</li>

							<li className="list__colmn">
								<div className="colmn__item">
									<div className="colomn__icon4"></div>									
										<h3>Recycled packaging</h3>
										<p>We use 100% recycled packaging to ensure our footprint is manageable</p>
								</div>
							</li>
						</ul>
					</div>
				</div>

				<div className="page__home__email__signup">
					<div className="email__singup">
						<h3>Join the club and get the benefits</h3>

						<p>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>

						<ul className="email__singup__list">
							<li className="email__singup__list__item">
								<img src="../images2/property.png" alt="#"></img>
								<span>Exclusive offers</span>
							</li>

							<li className="email__singup__list__item">
								<img src="../images2/property.png" alt="#"></img>
								<span>Free events</span>
							</li>

							<li className="email__singup__list__item">
								<img src="../images2/property.png" alt="#"></img>
								<span>Large discounts</span>
							</li>
						</ul>

						<div className="signup__form">
							<input value={inputValue} onChange={e => {setinputValue(e.target.value)}} required type="text" name="email" placeholder="your@email.com"></input>
							<button onClick={addEmailLocal}>Sign up</button>
						</div>
					</div>

				</div>
	  </div>
	);
  }
  
  export default About;