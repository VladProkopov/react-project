import { useState } from "react";
import { Link } from "react-router-dom";

function RegisterPage () {
    const [inputValueUserName, setInputValueUserName] = useState();
    const [inputValueUserEmail, setInputValueUserEmail] = useState();
    const [inputValueUserPass, setInputValueUserPass] = useState();

   function addUser() {
    let objUser = {
        name: inputValueUserName,
        email: inputValueUserEmail,
        password: inputValueUserPass
    }
    let datauser  = JSON.parse(localStorage.getItem('datauser')); 
            
    if(!datauser) datauser = [];

	if(!inputValueUserName && !inputValueUserEmail && !inputValueUserPass) return alert('Fill in the field name, mail, password');
    datauser.push(objUser);

    localStorage.setItem('datauser', JSON.stringify(datauser));

    alert('Welcome ' + inputValueUserName + ' Login to your account');

    return window.location.href="/login/";

    setInputValueUserName('');
    setInputValueUserEmail('');
    setInputValueUserPass('');

   }
    

    return (
        <div className="register__pages">
            <div className="register__container">
            <h2>Registration</h2>

            <div className="register__content">
                <input value={inputValueUserName} onChange={e => {setInputValueUserName(e.target.value)}} required placeholder="name" type="text" name="user"></input>
                <input value={inputValueUserEmail} onChange={e => {setInputValueUserEmail(e.target.value)}} required placeholder="login" type="email" name="email"></input>
                <input value={inputValueUserPass} onChange={e => {setInputValueUserPass(e.target.value)}} required placeholder="password" type="password" name="password"></input>
                <button onClick={addUser}>Registration</button>
            </div>

            <p>Already have an accont? <Link to="/login/">Sign in</Link></p>
            </div>
        </div>
    )
}

export default RegisterPage;