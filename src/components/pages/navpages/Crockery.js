import { useEffect, useState } from "react";

function Crockery () { 
    const [crockery, setCrockery] = useState([]);

    useEffect(() => {
        if(!crockery || crockery.length === 0) {
            const crockeryLocal = getData();

            if(crockeryLocal && crockeryLocal.length > 0) {
                setCrockery([...crockeryLocal])
            }
        }
    }, [crockery])
    
    async function getData () {
        let datalocal = localStorage.getItem('data');
        if(datalocal) {
           await fetch(`https://6369571515219b849615d39a.mockapi.io/product?search=crockry`)
            .then(response => response.json())
            .then(data => setCrockery(data))
        }
    }

    function getCrockery() {
        return crockery.map((item , id) => {
			return (
				<div key={id} className="products__catalog">
					<div className="products__catalog__list">
						<a href={"/product/" + item.id}><img alt="#" src={item.img}></img></a>
						<div className="catalog__list__item">{item.title}</div>
						<div className="catalog__list__item__price">£ {item.price}</div>
					</div>
				</div>
			)
		})
    }

    return (
        <div className="crockery__pages">
            <div className="crockery__container">{getCrockery()}</div>
        </div>
    )
}

export default Crockery;