import { useEffect, useState } from "react";

function Tables () { 
    const [tables, setTables] = useState([]);

    useEffect(() => {
        if(!tables || tables.length === 0) {
            const tablesLocal = getData();

            if(tablesLocal && tablesLocal.length > 0) {
                setTables([...tablesLocal])
            }
        }
    }, [tables])
    
    async function getData () {
        let datalocal = localStorage.getItem('data');
        if(datalocal) {
           await fetch(`https://6369571515219b849615d39a.mockapi.io/product?search=tables`)
            .then(response => response.json())
            .then(data => setTables(data))
        }
    }

    function getTables() {
        return tables.map((item , id) => {
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
        <div className="tables__pages">
            <div className="tables__container">{getTables()}</div>
        </div>
    )
}

export default Tables;