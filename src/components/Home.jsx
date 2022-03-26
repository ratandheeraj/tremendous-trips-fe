import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function CityData() {
  const [data, setData] = useState();
  const [cityName, setCityName] = useState();
  // const fetchData = async () => {
  //     axios.get(`http://localhost:3301/api/city/${cityName}`)
  //     .then(res => {
  //     const city = res.data;
  //     console.log(res.data)
  //     setData(res.data);
  //   })
  // };

  // useEffect(() => {
  //      fetchData();
  // }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:3301/api/city/${cityName}`).then(
      (res) => {
        const city = res.data;
        console.log(res.data);
        setData(res.data);
      },
      (error) => {
        alert("City does not exist: " + cityName);
      }
    );
  };

  return (
    <div>
      <Navbar />
      <div className="container pb-5">
        <div className="card w-50 center">
          <div className="card-body">
            <form
              className="form-inline"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="row">
                <div className="col-10">
                  <input
                    type="text"
                    className="form-control mb-2 mr-sm-2"
                    id="inlineFormInputName2"
                    placeholder="Enter city name"
                    onChange={(e) => setCityName(e.target.value)}
                  />
                </div>
                <div className="col-2">
                  <button type="submit" className="btn btn-dark mb-2">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {data ? (
          <div className="mt-3">
            <h1 className="text-center">
              {data?.city_name},{" "}
              <span className="fs-4">{data?.state_name}</span>
            </h1>
            <h2 className="mb-4">Popular Places:</h2>
            <div className="row mb-5">
              {data?.popularPlaces.map((place) => {
                return (
                  <div className="col-4" key={place.place_id}>
                    <div className="card" style={{ width: "22rem" }}>
                      <img
                        src={place.place_photo}
                        className="card-img-top"
                        alt="..."
                      />
                      {/* <img src={ require('../images/simhachalam.jpg') } /> */}
                      <div className="card-body">
                        <h5 className="card-title">{place.place_name}</h5>
                        <p className="card-text">{place.place_description}</p>
                        {/* <a
                          href="#"
                          className="btn btn-info"
                          style={{ position: "absolute", right: "4%" }}
                        >
                          Book
                        </a> */}
                        {
                          <Link
                            to="/booking"
                            className="btn btn-info"
                            style={{ position: "absolute", right: "4%" }}
                          >
                            Book
                          </Link>
                        }
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <h2 className="mt-5 mb-4">Hotels:</h2>
            <div className="row">
              {data?.hotels.map((hotel) => {
                return (
                  <div className="col-4" key={hotel.hotel_id}>
                    <div className="card" style={{ width: "22rem" }}>
                      <img
                        src={hotel.hotel_photo}
                        className="card-img-top"
                        alt="..."
                      />
                      {/* <img src={ require('../images/simhachalam.jpg') } /> */}
                      <div className="card-body">
                        <h5 className="card-title">{hotel.hotel_name}</h5>
                        <p className="card-text">{hotel.hotel_description}</p>
                        {/* <a
                          href="#"
                          className="btn btn-info"
                          style={{ position: "absolute", right: "4%" }}
                        >
                          Book
                        </a> */}
                        {
                          <Link
                            to="/booking"
                            className="btn btn-info"
                            style={{ position: "absolute", right: "4%" }}
                          >
                            Book
                          </Link>
                        }
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
