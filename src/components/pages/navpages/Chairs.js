import { useEffect, useState } from "react";

function Chairs () { 
    const [chairs, setChairs] = useState([]);

    useEffect(() => {
        if(!chairs || chairs.length === 0) {
            const chairsLocal = getData();

            if(chairsLocal && chairsLocal.length > 0) {
                setChairs([...chairsLocal])
            }
        }
    }, [chairs])
    
    async function getData () {
        let datalocal = localStorage.getItem('data');
        if(datalocal) {
           await fetch(`https://6369571515219b849615d39a.mockapi.io/product?search=chairs`)
            .then(response => response.json())
            .then(data => setChairs(data))
        }
    }

    function getChairs() {
        return chairs.map((item , id) => {
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
        <div className="chairs__pages">
            <div className="chairs__container">{getChairs()}</div>
        </div>
    )
}

export default Chairs;