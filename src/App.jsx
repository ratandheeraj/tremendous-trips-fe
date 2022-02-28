import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Home from './components/Home';
function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ps-4">
            <a className="navbar-brand" href="#">Tremendous Trips</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse container" id="navbarColor01">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item pe-2">
                {/* <a className="nav-link" href="#">Home</a> */}
                {<Link to="/" className='link'>Home</Link>}
                </li>
                <li className="nav-item pe-2">
                {/* <a className="nav-link" href="#">About</a> */}
                {<Link to="/login" className='link'>Login</Link>}
                </li>
                <li className="nav-item">
                {/* <a className="nav-link" href="#">Contact</a> */}
                {<Link to="/signup" className='link'>Signup</Link>}
                </li>
            </ul>
            </div>
        </nav>
       <Routes>
        <Route exact path='/'  element={<Home/>}/>
        <Route exact path="/signup" element={<SignUp/>}/>
        
        <Route exact path="/login" element={<Login/>}/>
       
    </Routes>
    {/* <Home/> */}
    </div>
  );
}
export default App;