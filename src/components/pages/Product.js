import {useParams} from 'react-router-dom';
import { useEffect, useState } from "react";


function Product () { 
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [inputValue, setInputValue] = useState(1);
    const [allProduct, setAllProduct] = useState([]);
    const [visible, setVisible] = useState(5);
    const [inputValueEmail, setInputValueEmail] = useState();
    const [emailAddLocal, setEmailAddLocal] = useState([]);
    
    useEffect(() => {
        if(!product || product.length === 0) {
			const productLocal = getData();

            if(productLocal && productLocal.length > 0) {
                setProduct([...productLocal])
            }
        }
        
    }, [id])

    async function getData () {
        let datalocal = localStorage.getItem('data');
        if(datalocal) {
           await fetch(`https://6369571515219b849615d39a.mockapi.io/product/` + id)
            .then(response => response.json())
            .then(data => setProduct(data))
        }
    }

    function inputMinus() {
        if(inputValue > 1) {
            setInputValue(inputValue - 1)
        } else {
            return
        }
    }

    function inputPlus() {
        setInputValue(inputValue + 1)
    }

    function allproductspage() {
		window.location.href="/allproducts/"
	}

    useEffect(() => {
		if(!allProduct || allProduct.length === 0) {
			const productLocal = getStorageAll();

		if(productLocal && productLocal.length > 0) {
			setAllProduct([...productLocal])
		}
	}	
	}, [allProduct])

    function getStorageAll() {
		let dataTmpLocal = localStorage.getItem('data');

		if(!dataTmpLocal) return;

		dataTmpLocal = JSON.parse(dataTmpLocal);

		if(!dataTmpLocal) return;

		return dataTmpLocal
	}

    function getAllProducts() {
        return allProduct.slice(1, visible).map((item , index) => {
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

    function addProductCart() {
        let dataCart  = JSON.parse(localStorage.getItem('dataCart'));
            
        if(!dataCart) dataCart = [];

        if(product) {
            dataCart.push(product);
        }

        localStorage.setItem('dataCart', JSON.stringify(dataCart));
        
        alert('Item added to cart');
    }

    function addEmailLocalStor() {
        if (!inputValueEmail || inputValueEmail.length < 8) return alert('Enter your email');

		let dataemail = {
			signedEmail: inputValueEmail
		};

		emailAddLocal.push(dataemail);

		localStorage.setItem('emailProduct', JSON.stringify(emailAddLocal));
		
		setInputValueEmail('');

		alert('You are now subscribed to our newsletter');
    }

    if(!product) {
        return "...Loading"
    }


    return (
        <div className="productId__pages">
                <div className='product__container'>
                    <div className='product__img'><img alt='#' src={product.img}></img></div>

                    <div className='product__container__content'>
                        <h2>{product.title}</h2>
                        <span>£ {product.price}</span>

                        <div className='content__discript'>
                            <h4>Description</h4>
                            <p>{product.description}</p>
                            <ul className='disript__list'>
                                <li className='list__item'><span>Premium material</span></li>
                                <li className='list__item'><span>Handmade upholstery</span></li>
                                <li className='list__item'><span>Quality timeless classic</span></li>
                            </ul>
                        </div>

                        <div className='content__dimensions'>
                            <h4>Dimensions</h4>
                            <ul className='dimensions__list'>
                                <li>Width</li>
                                <li>Heigth</li>
                                <li>Depth</li>
                            </ul>
                            <ul className='dimensions__list2'>
                                <li>110cm</li>
                                <li>75cm</li>
                                <li>50cm</li>
                            </ul>
                        </div>

                        <div className='content__add_product'>
                            <h3>Amount :</h3>

                            <button className='product__minus' onClick={inputMinus}>-</button>
                            <input value={inputValue} onChange={e => {setInputValue(e.target.value)}} type="number" min="1" max="99"></input>
                            <button className='product__plus' onClick={inputPlus}>+</button>

                            <button onClick={addProductCart} className='product__add_cart'>Add to cart</button>
                        </div>

                    </div>
                </div>

                <div className='listings__title'>
                    <h3>You might also like</h3>
                </div>
                
                <div className="page__home__listings">{getAllProducts()}</div>

				<div className="home__listings__btn">
					<button className="listings__btn" onClick={allproductspage}>View collection</button>
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
							<input value={inputValueEmail} onChange={e => {setInputValueEmail(e.target.value)}} required type="text" name="email" placeholder="your@email.com"></input>
							<button onClick={addEmailLocalStor}>Sign up</button>
						</div>
					</div>
				</div>
        </div>
    )
}

export default Product;