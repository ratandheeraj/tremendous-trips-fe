import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Admin(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigateTo = useNavigate();
    const handleSubmit= (e) => {
        e.preventDefault();
        // let data = {
        //     email:email,
        //     password:password
        // }
        // console.log(data);
        // axios.post(`http://localhost:3301/api/login`, 
        // data,   
        // )
        // .then((response) => {
            
        //     console.log(response);
        //     alert("Login successful");
        //     navigateTo('/home')
        // }, (error) => {
        // console.log(error);
        // });
        if(email.trim() == "admin" && password.trim() == "admin123"){
            alert("Login successful");
            navigateTo('/add-city');
        }
        else{
            alert("Incorrect credentials");
        }
      }
    return(
        <div>
            <div className='container mt-5 pt-3 w-25'>
                <form className='form-spl' onSubmit={e => {handleSubmit(e)}}>
                    <h1 class="h3 mb-3 text-center">Admin Login</h1>

                    <div class="form-floating">
                    <input type="text" class="form-control mb-2" id="floatingInput" placeholder="name@example.com" onChange={e => setEmail(e.target.value)}/>
                    <label for="floatingInput">Username</label>
                    </div>
                    <div class="form-floating">
                    <input type="password" class="form-control mb-2" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    <label for="floatingPassword">Password</label>
                    </div>
                    <button class="w-100 btn btn-lg btn-dark mt-1" type="submit">Sign in</button>
                </form>
            </div>
        </div>
    )
}