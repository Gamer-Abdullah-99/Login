import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

let user = {
    email: "abdullah@gmail.com",
    password: "123456"
}

export default function Login() {
    let history = useHistory()

    let [userEmail, setUserEmail] = useState('')
    let [userPassword, setUserPassword] = useState('')
    let [result, setResult] = useState('')

    function checkCred() {
        if (userEmail === user.email && userPassword === user.password) {
            return history.push('./userhome')
        } else (
            setResult('Enter Your Correct Credentials')
        )
    }

    return (
        <div>
            <label>Email : </label><input type="email" onChange={(a) => { setUserEmail(a.target.value) }}></input>
            <label>Password : </label><input type="password" onChange={(a) => { setUserPassword(a.target.value) }}></input>
            <button onClick={checkCred}>Login</button>
            <h5>{result}</h5>
        </div>
    )
}