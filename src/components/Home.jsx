import React, { useEffect, useState } from 'react';
import Simhachalam from '../images/simhachalam.jpg';
import Novotel from '../images/novotel.jpg';
import axios from 'axios';

export default function CityData(){
    const [data, setData] = useState();
    // const fetchData = async () => {
    //     axios.get(`https://jsonplaceholder.typicode.com/users`)
    //     .then(res => {
    //     const persons = res.data;
    //     setData(res.data);
    //   })
    // };
    
    useEffect(() => {
        // fetchData();
        setData ({
            cityId:"1",
            cityName:"Visakhapatnam",
            stateName:"Andhra Pradesh",
            popularPlaces:[
                {
                    id:"001",
                    name:"Simhachalam",
                    description:"Simhachalam is a Hindu temple situated on the Simhachalam Hill Range, which is 300 metres above the sea level in Visakhapatnam, Andhra Pradesh, India."
                },
                {
                    id:"002",
                    name:"Kailasagiri",
                    description:"Simhachalam is a Hindu temple situated on the Simhachalam Hill Range, which is 300 metres above the sea level in Visakhapatnam, Andhra Pradesh, India."
                }
            ],
            hotels:[
                {
                    id:"003",
                    name:"Novotel",
                    description: "Spoil yourself in 5-star seafront luxury at Novotel Visakhapatnam Varun Beach hotel. Spare contemporary design makes your room a calm haven, and picture windows offer you dazzling Bay of Bengal views."
                },
                {
                    id:"004",
                    name:"Green Park",
                    description: "Simhachalam is a Hindu temple situated on the Simhachalam Hill Range, which is 300 metres above the sea level in Visakhapatnam, Andhra Pradesh, India."
                },
                {
                    id:"005",
                    name:"The Park",
                    description: "Simhachalam is a Hindu temple situated on the Simhachalam Hill Range, which is 300 metres above the sea level in Visakhapatnam, Andhra Pradesh, India."
                }
            ]
        })
    }, []);


    return(
        <div className='container pb-5'>
            <div className="card w-50 center">
                <div className="card-body">
                <form class="form-inline">
                    <div className='row'>
                        <div className="col-10">
                            <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Enter city name"/>
                        </div>
                        <div className="col-2">
                            <button type="submit" class="btn btn-dark mb-2">Search</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>

            {data?
                <div className='mt-3'>
                <h1 className='text-center'>{data?.cityName}, <span className='fs-4'>{data?.stateName}</span></h1>
                <h2 className='mb-4'>Popular Places:</h2>
                <div className="row mb-5">
                    {
                        data?.popularPlaces.map(place =>{
                            return(<div className="col-4">
                                <div className="card" style={{width:"22rem"}}>
                                    <img src={Simhachalam} className="card-img-top" alt="..."/>
                                    {/* <img src={ require('../images/simhachalam.jpg') } /> */}
                                    <div className="card-body">
                                        <h5 className="card-title">{place.name}</h5>
                                        <p className="card-text">{place.description}</p>
                                        <a href="#" className="btn btn-info" style={{position:"absolute",right:"4%"}}>Know More</a>
                                    </div>
                                </div>
                            </div>)
                        })
                    }
                </div>
                


                <h2 className='mt-5 mb-4'>Hotels:</h2>
                <div className="row">
                {
                    data?.hotels.map(hotel =>{
                        return(<div className="col-4">
                            <div className="card" style={{width:"22rem"}}>
                                <img src={Novotel} className="card-img-top" alt="..."/>
                                {/* <img src={ require('../images/simhachalam.jpg') } /> */}
                                <div className="card-body">
                                    <h5 className="card-title">{hotel.name}</h5>
                                    <p className="card-text">{hotel.description}</p>
                                    <a href="#" className="btn btn-info" style={{position:"absolute",right:"4%"}}>Know More</a>
                                </div>
                            </div>
                        </div>)
                    })
                }
                </div>
            </div>
            :<div></div>
           
            
        }
            
        </div>
    )
}