import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

export default function Navbar(){
    return(
        <div>
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark ps-4">
                <a className="navbar-brand" href="#">Tremendous Trips</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse container" id="navbarColor01">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item pe-2">
                    {<Link to="/admin" className='link'>Admin</Link>}
                    </li>
                    <li className="nav-item pe-2">
                    {<Link to="/" className='link'>Login</Link>}
                    </li>
                    <li className="nav-item">
                    {<Link to="/signup" className='link'>Signup</Link>}
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    );
}