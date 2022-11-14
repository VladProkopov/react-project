import { useEffect, useState } from "react";


function AllProducts() {
	const [product, setProduct] = useState([]);
	const [visible, setVisible] = useState(9);
	const [furnitureCheck, setFurnitureCheck] = useState(false);
	const [homewareCheck, setHomewareCheck] = useState(false);
	const [accessoriesCheck, setAccessoriesCheck] = useState(false);
	const [priceOne, setPriceOne] = useState(false);
	const [priceTwo, setPriceTwo] = useState(false);
	const [priceThree, setPriceThree] = useState(false);
	const [activDiv, setAcivDiv] = useState(true);

	useEffect(() => {
		if(priceThree === true) {
			filterPriceThree();
			if(priceThree === false) return
		}

	}, [priceThree])

	function filterPriceThree() {
		product.filter((item) => {
			if(item.price > 250 && item.price < 1000) {
				return console.log("сюда код")
			}
		})
	}

	useEffect(() => {
		if(priceTwo === true) {
			filterPriceTwo();
			if(priceTwo === false) return
		}

	}, [priceTwo])

	function filterPriceTwo() {
		product.filter((item) => {
			if(item.price > 100 && item.price < 249) {
				return console.log("сюда код")
			}
		})
	}

	useEffect(() => {
		if(priceOne === true) {
			filterPriceOne();
			if(priceOne === false) return
		}

	}, [priceOne])

	function filterPriceOne() {
		product.filter((item) => {
			if(item.price > 0 && item.price < 99) {
				return console.log("сюда код")
			}
		})
	}

	useEffect(() => {
		if(accessoriesCheck === true) {
			filterAccessories();
			if(accessoriesCheck === false) return
		}

	}, [accessoriesCheck])

	function filterAccessories() {
		product.filter((item) => {
			if(item.category === "accessories") {
				return console.log("сюда код")
			}
		})
	}

	useEffect(() => {
		if(homewareCheck === true) {
			filterHomeware();
			if(homewareCheck === false) return
		}

	}, [homewareCheck])

	function filterHomeware() {
		product.filter((item) => {
			if(item.category === "homeware") {
				return console.log("сюда код")
			}
		})
	}

	useEffect(() => {
		if(furnitureCheck === true) {
			filterFurnit();
			if(furnitureCheck === false) return
		}

	}, [furnitureCheck])

	function filterFurnit() {
		product.filter((item) => {
			if(item.category === "furniture") {
				return console.log("сюда код")
			}
		})
	}

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

	function more() {
		setVisible((prevValue) => prevValue + 6);
	}

	return (
	  <div className="all__products__pages">
		<div className="page__header">
			<h2>All products</h2>
		</div>

		<div className="all__products">
			<div className="all__products__container">
				<div className="container__colmn">
					<h3>Product type</h3>
						<form className="filter__products">						
							<label>
								<input className="test" type="checkbox" id="furniture" checked={furnitureCheck} onChange={e => {setFurnitureCheck(e.target.checked)}}></input>
								Furniture
							</label>
						</form>
						<form className="filter__products">						
							<label>
								<input type="checkbox" id="furniture" checked={homewareCheck} onChange={e => {setHomewareCheck(e.target.checked)}}></input>
								Homeware
							</label>
						</form>
						<form className="filter__products">						
							<label>
								<input type="checkbox" id="furniture" checked={accessoriesCheck} onChange={e => {setAccessoriesCheck(e.target.checked)}}></input>
								Accessories
							</label>
						</form>
				</div>

				<div className="container__colmn">
					<h3>Price</h3>
						<form className="filter__products">						
							<label>
								<input type="checkbox" id="furniture" checked={priceOne} onChange={e => {setPriceOne(e.target.checked)}}></input>
								0 - 99
							</label>
						</form>
						<form className="filter__products">						
							<label>
								<input type="checkbox" id="furniture" checked={priceTwo} onChange={e => {setPriceTwo(e.target.checked)}}></input>
								100 - 249
							</label>
						</form>
						<form className="filter__products">						
							<label>
								<input type="checkbox" id="furniture" checked={priceThree} onChange={e => {setPriceThree(e.target.checked)}}></input>
								250 +
							</label>
						</form>
				</div>
			</div>

			<div className="all__products__catalog">{get()}</div>
		</div>

			<div className="products__catalog__loadmore">
				<button onClick={more} className="btn__loadmore">Load more</button>
			</div>
	  </div>
	);
  }

  export default AllProducts;