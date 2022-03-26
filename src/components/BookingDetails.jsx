import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
function BookingDetails() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigateTo = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Navbar />
      <div className="container w-25">
        <form
          className="form-spl"
          style={{ marginTop: "1rem", paddingTop: "1rem" }}
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h1 class="h3 mb-3 text-center">Booking Page</h1>

          <div class="form-floating">
            <input
              type="text"
              class="form-control mb-2"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Name:</label>
          </div>
          <div class="form-floating">
            <input
              type="test"
              class="form-control mb-2"
              id="floatingPassword"
              placeholder="name@example.com"
            />
            <label for="floatingPassword">Age</label>
          </div>
          <div class="form-floating">
            <input
              type="text"
              class="form-control mb-2"
              id="floatingPassword"
              placeholder="name@example.com"
            />
            <label for="floatingPassword">Mobile Number:</label>
          </div>
          <div class="form-floating">
            <input
              type="number"
              class="form-control mb-2"
              id="floatingPassword"
              placeholder="name@example.com"
            />
            <label for="floatingPassword">No.of Rooms:</label>
          </div>
          <div class="form-floating">
            <input
              type="date"
              class="form-control mb-2"
              id="floatingPassword"
              placeholder="name@example.com"
            />
            <label for="floatingPassword">From Date:</label>
          </div>
          <div class="form-floating">
            <input
              type="date"
              class="form-control mb-2"
              id="floatingPassword"
              placeholder="name@example.com"
            />
            <label for="floatingPassword">To Date:</label>
          </div>
          <div class="form-floating">
            <input
              type="text"
              class="form-control mb-2"
              id="floatingPassword"
              placeholder="name@example.com"
            />
            <label for="floatingPassword">Aadhar Number:</label>
          </div>
          <div class="form-floating">
            <input
              type="text"
              class="form-control mb-2"
              id="floatingPassword"
              placeholder="name@example.com"
            />
            <label for="floatingPassword">Address:</label>
          </div>
          <button class="w-100 btn btn-lg btn-dark mt-1" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingDetails;
