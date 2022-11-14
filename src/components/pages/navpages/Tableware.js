import { useEffect, useState } from "react";

function Tableware () { 
    const [tableware, setTableware] = useState([]);

    useEffect(() => {
        if(!tableware || tableware.length === 0) {
            const tablewareLocal = getData();

            if(tablewareLocal && tablewareLocal.length > 0) {
                setTableware([...tablewareLocal])
            }
        }
    }, [tableware])
    
    async function getData () {
        let datalocal = localStorage.getItem('data');
        if(datalocal) {
           await fetch(`https://6369571515219b849615d39a.mockapi.io/product?search=tableware`)
            .then(response => response.json())
            .then(data => setTableware(data))
        }
    }

    function getTableware() {
        return tableware.map((item , id) => {
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
        <div className="tableware__pages">
            <div className="tableware__container">{getTableware()}</div>
        </div>
    )
}

export default Tableware;