import { useEffect, useState } from "react";
import BuyProduct from "./Buy";

function Cart () {
    const [cartProduct, setCartProduct] = useState([]);
    const [buyActive, setBuyActive] = useState(false)

    useEffect(() => {
        if(!cartProduct || cartProduct.length === 0) {
            const cartLocalProducs = getCartStorage()

            if(cartLocalProducs) {
                setCartProduct([...cartLocalProducs]);
            }
        }
    }, [cartProduct])

    function getCartStorage() {
		let dataCart = localStorage.getItem('dataCart');

		if(!dataCart) return;

		dataCart = JSON.parse(dataCart);

		if(!dataCart) return;

		return dataCart
	}

    function getProduct() {
        return cartProduct.map((item, index) => {
			return (
				<div key={index} className="cart__product">
					<div className="product__list">
                            <div className="cart__list__item">
                                <img alt="#" src={item.img}></img>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                                <span>£ {item.price}</span>
                            </div>
                    </div>
				</div>
			)
		})
    }
    
    let sum = 0;

    function getTotalPrice() {
        for(let i = 0; i < cartProduct.length; i++) {
            sum += cartProduct[i].price
        }
        
        return sum;
    }

    if(!cartProduct) return "...Loading"
    
    return (
        <div className="cart__pages">
            <div className="cart__conrainer">
                <h2>Your shopping cart</h2>

                <div className="container__product">
                    <div className="cart__product__title__list">
                        <ul>
                            <li>Product</li>
                            <li>Description</li>
                            <li>Total</li>
                        </ul>
                    </div>

                    <div className="product__list__item">
                        {getProduct()}

                        <div className="cart__btn__byu">
                            <span>Total: £ {getTotalPrice()}</span>
                            <button onClick={() => setBuyActive(true)}>Go to checkout</button>
                        </div>
                    </div>
                </div>
            </div>

            <BuyProduct active={buyActive} setActive={setBuyActive} />
        </div>
    )
}

export default Cart;