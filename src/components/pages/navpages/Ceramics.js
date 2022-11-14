import { useEffect, useState } from "react";

function Ceramics () { 
    const [ceramics, setCeramics] = useState([]);

    useEffect(() => {
        if(!ceramics || ceramics.length === 0) {
            const ceramicsLocal = getData();

            if(ceramicsLocal && ceramicsLocal.length > 0) {
                setCeramics([...ceramicsLocal])
            }
        }
    }, [ceramics])
    
    async function getData () {
        let datalocal = localStorage.getItem('data');
        if(datalocal) {
           await fetch(`https://6369571515219b849615d39a.mockapi.io/product?search=ceramics`)
            .then(response => response.json())
            .then(data => setCeramics(data))
        }
    }

    function getCeramics() {
        return ceramics.map((item , id) => {
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
        <div className="ceramics__pages">
            <div className="ceramics__container">{getCeramics()}</div>
        </div>
    )
}

export default Ceramics;