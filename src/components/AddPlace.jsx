import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
import AdminNav from './AdminNav';
function AddPlace(){
    const [cities, setCities] = useState();
    const [citiesArray, setCitiesArray] = useState();
    const [placeName, setPlaceName] = useState();
    const [placeDescription, setPlaceDescription] = useState();
    const [placePhoto, setPlacePhoto] = useState();
    const [cityId, setcityId] = useState();

    useEffect(() => {
        axios.get(`http://localhost:3301/api/city`)
        .then((response) => {
            console.log(response.data);
            setCities(response.data);
            let city_array = [];
            // response.data?.map(city =>{
            //     let temp = {
            //         label : city.city_name,
            //         value : city.city_id
            //     }
            //     city_array.push(temp);
            // })
            for(let i=0;i<response.data.length;i++){
                let temp = {
                    label : response.data[i].city_name,
                    value : response.data[i].city_id
                }
                city_array.push(temp);
            }
            setCitiesArray(city_array);
        }, (error) => {
            console.log(error);
        });
      }, []);

    const navigateTo = useNavigate();
    const handleSubmit= (e) => {
        e.preventDefault();
        let data = {
            place_name:placeName,
            place_description:placeDescription,
            place_photo:placePhoto,
            city_id: cityId
        }
        console.log(data);
        axios.post(`http://localhost:3301/api/place`, data)
        .then((response) => {
            alert("Place created successfully");
            // navigateTo('/login')
        }, (error) => {
        console.log(error);
        });
      }
    return(
        <div>
            <AdminNav/>
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
            <div className="form-floating pb-2">
            <Select options={citiesArray} onChange={e => setcityId(e.value)}/>
            </div>
            <button className="w-100 btn btn-lg btn-dark mt-1" type="submit">Create Place</button>
        </form>
    </div>
        </div>
    );
}

export default AddPlace;

