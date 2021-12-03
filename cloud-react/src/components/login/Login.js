import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [apiStatus, setApiStatus] = useState('')
    const [loginStatus, setLoginStatus] = useState(null)
    const [userId, setUserId] = useState('')
    const history = useHistory();

    function readEmail(e) {
        setEmail(e.target.value)
    }

    function readPassword(e) {
        setPassword(e.target.value)
    }

    useEffect(() => {
        console.log('inside useEffect')
        console.log('inside login status ='+ loginStatus)

        if (loginStatus === 'success'){
            history.push('/dashboard')
        }
        else {
            console.log('login failed')
        }
    }, [loginStatus]);

    function login() {
        const loginObj = {
            email: email,
            password: password
        }
        // const url = "http://localhost:8080/user/login"
        const url = "http://34.127.76.90:8080/user/login"

        axios.post(url, loginObj).then(res => {
            console.log(res)
            if (res.status === 200) {
                setApiStatus(res.data)
                console.log(res.data)

                
                
                setUserId(res.data.userId)
                setLoginStatus(res.data.data.loginStatus)
                console.log('login status ='+ loginStatus)

            }
            else{
                console.log('API call failed')
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>

            <div>
                <h5>Email</h5>
                <input onChange={readEmail} value={email} type="text"></input>
            </div>

            <div>
                <h5>Password</h5>
                <input onChange={readPassword} value={password} type="password"></input>
            </div>

            <button onClick={login} type="submit" className="btn btn-primary button-space">Login</button>
        </div>
    );
}

export default Login;