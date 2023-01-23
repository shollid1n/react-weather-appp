import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
    function handleResponse(response) {
        console.log(response.data);
    }


    const apiKey = "6f1874ea3oecc504fe31e30b5t90ef8e";
    let city = "New York";
    let apiUrl = 
    `https://api.shecodes.io/weather/v1/current?query=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return (
        <div className="Weather"> 
        <form>
            <div className="row">
                <div className="col-9">
            <input 
            type="search" 
            placeholder="Enter a city.."
            className="form-control"
            autoFocus="on"
            />
            </div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100"/>
            </div>
            </div>
        </form>
        <h1>New York</h1>
        <ul>
            <li>Wednesday 7:00 PM</li>
            <li>Mostly Cloudy</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
            <div className="clearfix">
             <img 
           src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" 
           alt="Mostly Cloudy"
           className="float-left"
           />
           <div className="float-left">
           <span className="temperature">30</span>
           <span className="unit">°F</span>
           </div>
           </div>
        </div>
        <div className="col-6">
            <ul>
                <li>Precipitation: 1%</li>
                <li>Humidity: 52%</li>
                <li>Wind: 10mph</li>
            </ul>
        </div>
        </div>
        </div>
    )
}