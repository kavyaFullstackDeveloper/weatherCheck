import React from "react";
import './weatherApp.css';
import { useState } from "react";

import clearcloud from   "../assets/clearcloud.png";
import cloud from '../assets/cloud.png'; 
import drizzle from  '../assets/drizzle.png';
import rain from  '../assets/rain.png';
import  snow from  '../assets/snow.png';
import wind from  '../assets/wind.png';
import.meta.env.api_key;

const WeatherApp = () => {

    
     const [wicon, setWicon] = useState(cloud);

    const search = async () => {
        const city = document.getElementsByClassName("cityInput")[0].value;

        if (city === "") {
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`;

        let res = await fetch(url);
        let data = await res.json();
        console.log(data);

        const humidity = document.getElementsByClassName("humidity-percentage")[0];
        const wind = document.getElementsByClassName("wind-rate")[0];
        const temp = document.getElementsByClassName("weather-temp")[0];
        const location = document.getElementsByClassName("weather-location")[0];
        const description = document.getElementsByClassName("description")[0];

        humidity.innerHTML = data.main.humidity + " %";
        wind.innerHTML = data.wind.speed + " km/h";
        temp.innerHTML = Math.floor(data.main.temp) + "°C";
        location.innerHTML = data.name;
        description.innerHTML = data.weather[0].description;
       
        if (data.weather[0].icon === '01d' || data.weather[0].icon === "01n")
        {
            setWicon(clearcloud);
        }
        else if ( data.weather[0].icon === "02d" || data.weather[0].icon === "02n")
        {
            setWicon(cloud)
        }
        else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n")
        {
            setWicon(drizzle)
        }
        else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n")
       {
        setWicon(drizzle)
       }
       else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n")
       {
        setWicon(cloud)
       }
       else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n")
       {
        setWicon(rain)
       }
       else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n")
       {
        setWicon(snow)
       }
       else{
        setWicon(clearcloud)
       }
    }

    return (
        <div className="container">
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="search" />
                <div className="search">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb5gJN7JtWoSjpa0ZUzEPYgVOTRyb_7PtbBQ&s" className="search-icon" onClick={() => { search() }} alt="Search" />
                </div>
            </div>

            <div className="weather-image">
                <img src={wicon} alt="weather-img" />
            </div>

            <div className="weather-temp">24°</div>
            <div className="weather-location">Mumbai</div>
            <div className="data-container">
                <div className="element">
                    <img src="src/components/assets/humidity.png" alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percentage">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>

                <div className="element">
                    <img src="src/components/assets/wind.png" alt="" className="icon" />
                    <div className="data">
                        <div className="wind-rate">18 km/h</div>
                        <div className="text">Wind</div>
                    </div>
                </div>
            </div>

            <div>
                <p className="description text icon weather-image">Weather: Happy weather today</p>
            </div>
        </div>
    )
}

export default WeatherApp;