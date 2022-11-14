import { useEffect, useState } from "react";

function Home() {
	const [product, setProduct] = useState([]);
	const [visible, setVisible] = useState(5);
	const [inputValue, setInputValue] = useState('');

	useEffect(() => {
		if(!product || product.length === 0) {
			const productLocal = getStorage();

		if(productLocal && productLocal.length > 0) {
			setProduct([...productLocal])
		}
	}	
	}, [product])

	function getStorage() {
		let dataTmp = localStorage.getItem('data');

		if(!dataTmp) return;

		dataTmp = JSON.parse(dataTmp);

		if(!dataTmp) return;

		return dataTmp
	}
	
	function get() {
		return product.slice(1, visible).map((item , index) => {
			return (
				<div key={index} className="listings__list">
					<div className="list__colmn__item">
						<a href={"/product/" + item.id}><img alt="#" src={item.img}></img></a>
						<div className="listings__item">{item.title}</div>
						<div className="listings__item__price">£ {item.price}</div>
					</div>
				</div>
			)	
		})
	}
	

	function cutlery() {
		window.location.href="/cutlery/"
	}

	function allproducts() {
		window.location.href="/allproducts/"
	}

	function about() {
		window.location.href="/about/"
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
			<div className="page__home">
				<div className="page__home__heroblock">
					<div className="heroblock__img"></div>

					<div className="heroblock__container">
						<div className="heroblock__container__content">
							<h2>Luxury homeware for people who love timeless design quality</h2>

							<p>Shop the new Spring 2022 collection today</p>
						</div>

						<div className="heroblock__btn">
							<button onClick={cutlery}>View collection</button>
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

				<div className="page__home__listings">{get()}</div>

				<div className="home__listings__btn">
					<button className="listings__btn" onClick={allproducts}>View collection</button>
				</div>

				<div className="page__home__features__bottom">
					<div className="features__bottom__container">
						<div className="features__botoom__content">
							<h3>It started with a small idea</h3>

							<p>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>

							<button onClick={about}>About us</button>
						</div>
					</div>

					<div className="features__bottom_img"></div>
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
							<input value={inputValue} onChange={e => {setInputValue(e.target.value)}} required type="text" name="email" placeholder="your@email.com"></input>
							<button onClick={addEmailLocal}>Sign up</button>
						</div>
					</div>

				</div>
			</div>
		);
	}
	
	
export default Home;