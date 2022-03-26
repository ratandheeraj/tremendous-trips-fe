import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Home from "./components/Home";
import AddCity from "./components/AddCity";
import AddPlace from "./components/AddPlace";
import AddHotel from "./components/AddHotel";
import Admin from "./components/Admin";
import Landing from "./components/Landing";
import BookingDetails from "./components/BookingDetails";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/booking" element={<BookingDetails />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/add-city" element={<AddCity />} />
        <Route exact path="/add-place" element={<AddPlace />} />
        <Route exact path="/add-hotel" element={<AddHotel />} />
      </Routes>
      {/* <Home/> */}
    </div>
  );
}
export default App;
