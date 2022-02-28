import React, { Component } from 'react';
// import axios from "axios";
function SignUp(){
    return(
        <div className='container mt-5 pt-3 w-25'>
            <form className='form-spl'>
            <h1 class="h3 mb-3 text-center">SignUp</h1>
            <div class="form-floating">
                <input type="text" class="form-control mb-2" id="username" placeholder="John Wick"/>
                <label for="username">Name</label>
            </div>
            <div class="form-floating">
            <input type="email" class="form-control mb-2" id="email" placeholder="name@example.com"/>
            <label for="email">Email address</label>
            </div>
            <div class="form-floating">
            <input type="password" class="form-control mb-2" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Choose Password</label>
            </div>
            <button class="w-100 btn btn-lg btn-dark mt-1" type="submit">Sign in</button>
        </form>
    </div>
    );
}

export default SignUp;

