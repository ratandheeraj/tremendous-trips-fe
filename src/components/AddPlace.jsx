import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AddPlace(){
    const [cities, setCities] = useState();
    const [placeName, setPlaceName] = useState();
    const [placeDescription, setPlaceDescription] = useState();
    const [placePhoto, setPlacePhoto] = useState();
    useEffect(() => {
        axios.get(`http://localhost:3301/api/city`)
        .then((response) => {
            setCities(response);
        }, (error) => {
        console.log(error);
        });
      }, []);
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
    useEffect
    return(
        <div className='container mt-5 pt-3 w-25'>
            <form className='form-spl' onSubmit={e => {handleSubmit(e)}}>
            <h1 className="h3 mb-3 text-center">Add Place</h1>
            <div className="form-floating">
                <input type="text" className="form-control mb-2" id="place_name" placeholder="RK Beach" onChange={e => setPlaceName(e.target.value)}/>
                <label for="place_name">Place Name</label>
            </div>
            <div className="form-floating">
            <input type="text" className="form-control mb-2" id="place_description" placeholder="Something about RK beach" onChange={e => setPlaceDescription(e.target.value)}/>
            <label for="place_description">Place Description</label>
            </div>
            <div className="form-floating">
            <input type="text" className="form-control mb-2" id="place_photo" placeholder="beach.jpg" onChange={e => setPlacePhoto(e.target.value)}/>
            <label for="place_photo">Place Photo</label>
            </div>
            {/* <SelectSearch
        options={countries}
        search
        filterOptions={fuzzySearch}
        emptyMessage="Not found"
        placeholder="Select your country"
    /> */}
            <button className="w-100 btn btn-lg btn-dark mt-1" type="submit">Create Place</button>
        </form>
    </div>
    );
}

export default AddPlace;

