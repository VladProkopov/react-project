import { useEffect, useState } from "react";


function Plant () {
    const [plant, setPlant] = useState([]);

    useEffect(() => {
        if(!plant || plant.length === 0) {
            const plantLocal = getData();

            if(plantLocal && plantLocal.length > 0) {
                setPlant([...plantLocal])
            }
        }
    }, [plant])
    
    async function getData () {
        let datalocal = localStorage.getItem('data');
        if(datalocal) {
           await fetch(`https://6369571515219b849615d39a.mockapi.io/product?search=plant`)
            .then(response => response.json())
            .then(data => setPlant(data))
        }
    }

    function getPlant() {
        return plant.map((item , id) => {
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
        <div className="plant__pages">
            <div className="plant__container">{getPlant()}</div>
        </div>
    )
}

export default Plant;