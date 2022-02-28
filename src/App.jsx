import React from 'react';
import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
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
        
            <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
                </li>
            </ul>
            </div>
        </nav>
       {/* <Switch>
        <Route exact path='/'  >
          <Login/>
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/home">
          <CityData />
        </Route>
    </Switch> */}
    <Home/>
    </div>
  );
}
export default App;