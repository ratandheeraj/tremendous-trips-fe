import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AddCity(){
    const [cityName, setCityName] = useState();
    const [stateName, setStateName] = useState();
    const navigateTo = useNavigate();
    const handleSubmit= (e) => {
        e.preventDefault();
        let data = {
            city_name:cityName,
            state_name:stateName
        }
        axios.post(`http://localhost:3301/api/city`, data)
        .then((response) => {
            alert("City created successfully");
            // navigateTo('/login')
        }, (error) => {
        console.log(error);
        });
      }
    return(
        <div className='container mt-5 pt-3 w-25'>
            <form className='form-spl' onSubmit={e => {handleSubmit(e)}}>
            <h1 className="h3 mb-3 text-center">Add City</h1>
            <div className="form-floating">
                <input type="text" className="form-control mb-2" id="city_name" placeholder="Visakhapatnam" onChange={e => setCityName(e.target.value)}/>
                <label for="city_name">City Name</label>
            </div>
            <div className="form-floating">
            <input type="text" className="form-control mb-2" id="state_name" placeholder="Andhra Pradesh" onChange={e => setStateName(e.target.value)}/>
            <label for="state_name">State Name</label>
            </div>
            <button className="w-100 btn btn-lg btn-dark mt-1" type="submit">Add City</button>
        </form>
    </div>
    );
}

export default AddCity;

