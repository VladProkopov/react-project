import { useEffect, useState } from "react";

function Bestsellers () { 
    const [product, setProduct] = useState([]);
	const [visible, setVisible] = useState(12);

    useEffect(() => {
		if(!product || product.length === 0) {
			const productLocal = getStorage();

		if(productLocal && productLocal.length > 0) {
			setProduct([...productLocal])
		}
		}
		
	}, [product])

	function getStorage() {
		let dataTmp = localStorage.getItem('data');

		if(!dataTmp) return;

		dataTmp = JSON.parse(dataTmp);

		if(!dataTmp) return;

		return dataTmp
	}

	function get() {
		return product.slice(0, visible).map((item , id) => {
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
        <div className="bestsellers__pages">
            <div className="bestsellers__container">
                {get()}
            </div>
        </div>
    )
}

export default Bestsellers;