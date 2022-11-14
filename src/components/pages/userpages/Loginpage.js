import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LoginPage () { 
    const [localUser, setLocalUser] = useState([]);
    const [inputEmail, setInputEmail] = useState();
    const [inputPass, setInputPass] = useState();

    useEffect (() => {
        if(!localUser || localUser.length === 0) {
			const userLocal = getUserLocal();

		if(userLocal && userLocal.length > 0) {
			setLocalUser([...userLocal])
		}
		}
    }, [localUser])

    function getUserLocal() {
        let localDataUser = localStorage.getItem('datauser');
        
        if(!localDataUser) return

        localDataUser = JSON.parse(localDataUser);
        
        if(!localDataUser) return

        return localDataUser
    }

    function singUser() {
        if(!localUser) {
            alert("Register to login")
        } else if(localUser) {
            return localUser.map((item, id) => {
                if(item.email === inputEmail && item.password === inputPass) {
                    alert('Wellcome ' + item.name + " Now you can shop") 
                    window.location.href ="/"
                    
                } else if(item.email !== inputEmail && item.password !== inputPass) {
                    return alert("You entered incorrect data")
                }
            })
        }
    }

    return (
        <div className="login__page">
            <h2>Login to your account</h2>

            <input value={inputEmail} onChange={e => {setInputEmail(e.target.value)}} required placeholder="login" type="email" name="email"></input>
            <input value={inputPass} onChange={e => {setInputPass(e.target.value)}} required placeholder="password" type="password" name="password"></input>

            <div className="login__btn">
            <button onClick={singUser}>Sign in</button>
            </div>
            

            <p>Or <Link to="/register/">registration</Link></p>
        </div>
    )
}

export default LoginPage;

