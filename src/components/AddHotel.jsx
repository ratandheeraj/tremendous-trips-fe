import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
function AddHotel(){
    const [cities, setCities] = useState();
    const [citiesArray, setCitiesArray] = useState();
    const [hotelName, setHotelName] = useState();
    const [hotelDescription, setHotelDescription] = useState();
    const [hotelPhoto, setHotelPhoto] = useState();
    const [cityId, setcityId] = useState();

    useEffect(() => {
        axios.get(`http://localhost:3301/api/city`)
        .then((response) => {
            console.log(response.data);
            setCities(response.data);
            let hotel_array = [];
            for(let i=0;i<response.data.length;i++){
                let temp = {
                    label : response.data[i].city_name,
                    value : response.data[i].city_id
                }
                hotel_array.push(temp);
            }
            setCitiesArray(hotel_array);
        }, (error) => {
        console.log(error);
        });
      }, []);

    const navigateTo = useNavigate();
    const handleSubmit= (e) => {
        e.preventDefault();
        let data = {
            hotel_name:hotelName,
            hotel_description:hotelDescription,
            hotel_photo:hotelPhoto,
            city_id: cityId
        }
        console.log(data);
        axios.post(`http://localhost:3301/api/hotel`, data)
        .then((response) => {
            alert("Hotel created successfully");
            // navigateTo('/login')
        }, (error) => {
        console.log(error);
        });
      }
    return(
        <div className='container mt-5 pt-3 w-25'>
            <form className='form-spl' onSubmit={e => {handleSubmit(e)}}>
            <h1 className="h3 mb-3 text-center">Add Hotel</h1>
            <div className="form-floating">
                <input type="text" className="form-control mb-2" id="hotel_name" placeholder="RK Beach" onChange={e => setHotelName(e.target.value)}/>
                <label for="hotel_name">Hotel Name</label>
            </div>
            <div className="form-floating">
            <input type="text" className="form-control mb-2" id="hotel_description" placeholder="Something about RK beach" onChange={e => setHotelDescription(e.target.value)}/>
            <label for="hotel_description">Hotel Description</label>
            </div>
            <div className="form-floating">
            <input type="text" className="form-control mb-2" id="hotel_photo" placeholder="beach.jpg" onChange={e => setHotelPhoto(e.target.value)}/>
            <label for="hotel_photo">Hotel Photo</label>
            </div>
            <div className="form-floating pb-2">
            <Select options={citiesArray} onChange={e => setcityId(e.value)}/>
            </div>
            <button className="w-100 btn btn-lg btn-dark mt-1" type="submit">Create Hotel</button>
        </form>
    </div>
    );
}

export default AddHotel;

