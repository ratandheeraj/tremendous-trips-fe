import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
function SignUp(){
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigateTo = useNavigate();
    const handleSubmit= (e) => {
        e.preventDefault();
        let data = {
            name:String(name),
            email:String(email),
            password:String(password)
        }
        axios.post(`http://localhost:3301/api/user`, data)
        .then((response) => {
            alert("User created successfully");
            navigateTo('/login')
        }, (error) => {
        console.log(error);
        });
      }
    return(
        <div className='container mt-5 pt-3 w-25'>
            <form className='form-spl' onSubmit={e => {handleSubmit(e)}}>
            <h1 className="h3 mb-3 text-center">SignUp</h1>
            <div className="form-floating">
                <input type="text" className="form-control mb-2" id="username" placeholder="John Wick" onChange={e => setName(e.target.value)}/>
                <label for="username">Name</label>
            </div>
            <div className="form-floating">
            <input type="email" className="form-control mb-2" id="email" placeholder="name@example.com" onChange={e => setEmail(e.target.value)}/>
            <label for="email">Email address</label>
            </div>
            <div className="form-floating">
            <input type="password" className="form-control mb-2" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            <label for="floatingPassword">Choose Password</label>
            </div>
            <button className="w-100 btn btn-lg btn-dark mt-1" type="submit">Sign in</button>
        </form>
    </div>
    );
}

export default SignUp;

