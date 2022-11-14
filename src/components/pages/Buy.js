import { useEffect, useState } from "react";

function BuyProduct({active, setActive}) {
    const [inputName, setInputName] = useState()
    const [inputPhone, setInputPhone] = useState()
    const [inputAddress, setInputAddress] = useState()
    const [data, setData] = useState({});

    function updateCartStorage() {
        buy()

		let dataTmpLocal = localStorage.getItem('dataCart');

		if(!dataTmpLocal) return;

		dataTmpLocal = JSON.parse(dataTmpLocal);

        if(!data) return; 
        dataTmpLocal.push(data);

        dataTmpLocal = JSON.stringify(dataTmpLocal);
        
        localStorage.setItem('dataCart', dataTmpLocal);
    }

    function buy() {
        if(inputName && inputPhone && inputAddress) {
            return setData({
                name: inputName,
                phone: inputPhone,
                address: inputAddress
            })
        } else return
    }

    return(

        <div className={active ? "popup__buy active" : "popup__buy"}>
            <div onClick={e => e.stopPropagation()} className="popup__buy__content">
                <button onClick={() => setActive(false)} className="popup__buy__close">X</button>
                <h2>Fill in the fields for delivery</h2>
                <input onChange={e => {setInputName(e.target.value)}} type="text" name="name" placeholder="Your Name"></input>
                <input onChange={e => {setInputPhone(e.target.value)}} type="tel" name="phone" placeholder="Your Phone"></input>
                <input onChange={e => {setInputAddress(e.target.value)}} type="text" name="address" placeholder="Your Address"></input>
                <button onClick={updateCartStorage} className="popup__buy__btn">Buy</button>
            </div>
        </div>
    )

    
}

export default BuyProduct;