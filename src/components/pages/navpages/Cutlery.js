import { useEffect, useState } from "react";

function Cutlery () { 
    const [cutlery, setCutlery] = useState([]);

    useEffect(() => {
        if(!cutlery || cutlery.length === 0) {
            const cutleryLocal = getData();

            if(cutleryLocal && cutleryLocal.length > 0) {
                setCutlery([...cutleryLocal])
            }
        }
    }, [cutlery])
    
    async function getData () {
        let datalocal = localStorage.getItem('data');
        if(datalocal) {
           await fetch(`https://6369571515219b849615d39a.mockapi.io/product?search=cutlery`)
            .then(response => response.json())
            .then(data => setCutlery(data))
        }
    }

    function getCutlery() {
        return cutlery.map((item , id) => {
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
        <div className="cutlery__pages">
            <div className="cutlery__container">{getCutlery()}</div>
        </div>
    )
}

export default Cutlery;