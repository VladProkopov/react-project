import Nav from "./Nav";

import Search from "../images/search.png";
import Shopcart from "../images/shopcart.png";
import User from "../images/user.png";
import { useEffect, useState } from "react";

function Header() {
	const [inputSearch, setInputSearch] = useState('');
	const [product, setProduct] = useState([]);

	useEffect(() => {
        if(!product || product.length === 0) {
			const productLocal = getData();

            if(productLocal && productLocal.length > 0) {
                setProduct([...productLocal])
            }
        }
        
    }, [product])

    async function getData () {
        let datalocal = localStorage.getItem('data');
        if(datalocal) {
           await fetch(`https://6369571515219b849615d39a.mockapi.io/product`)
            .then(response => response.json())
            .then(data => setProduct(data))
        }
    }

	function getSearch() {
		product.map((item, id) => {
			if(item.title === inputSearch) {
				return  window.location.href = "/product/" + item.id;
			}
			
		}) 
	}

	return (
		<header className="header">
			<div className="header__wrapper">
				<div className="header__wrapper__container">
					<div className="header__search">
						<input value={inputSearch} onChange={e => {setInputSearch(e.target.value)}}	placeholder="Product1.3"  type="text"></input>
						<button onClick={getSearch}><img alt="#" src={Search}></img></button>
					</div>

					<div className="header__logo">
						<a href="/">Avion</a>
					</div>

					<ul className="header__utility">
						<li className="header__cart"><a href="/cart/"><img alt="#" src={Shopcart}></img></a></li>
						<li className="header__user"><a href="/login/"><img alt="#" src={User}></img></a></li>
					</ul>
				</div>

				<div className="header__nav">    
					<Nav/>
				</div> 
			</div>  
		</header>
	);
}
	
export default Header;
	