import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
    
     const [weatherData, setWeatherData] = useState({ready: false});
     const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            date: new Date(response.data.time * 1000), 
            description: response.data.condition.description,
            icon: response.data.condition.description.icon_url.icon,
            wind: response.data.wind.speed,
            city: response.data.city
        });
        
       
    }

    function search() {
        const apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
        let apiUrl = 
    `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
    setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather"> 
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                <input 
                type="search" 
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
                />
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100"/>
                </div>
                </div>
            </form>
            <WeatherInfo data={weatherData} />
            <WeatherForecast />
              </div>
        );

    } else {
    
    search();
    return  "Loading..";
    }


    
    
}