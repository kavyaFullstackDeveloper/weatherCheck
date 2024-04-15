import React from "react";
import './weatherApp.css';


const weatherApp = () => {
    let api_key = "504985c5bbf69dba2284ebc2b32ac4c6";

    const search = async () => {
        const city = document.getElementsByClassName("cityInput")
       
        if(city[0].value === "")
        {
            return 0;
        }
   
       let url = `https://api.openweathermap.org/data/2.5/weather?q=${city[0]}&units=Metric&appid=${api_key}`;
        
       let res = await fetch(url);
       let data = await res.json();

       const humidity  = document.getElementsByClassName("humidity-percentage");
       const wind = document.getElementsByClassName("wind-rate");
       const temp = document.getElementsByClassName("weather-temp")      
       const location = document.getElementsByClassName("weather-location");
       const description = document.getElementsByClassName("description"); 

       humidity[0].innerHTML = data.main[0].humidity + " %";
       wind[0].innerHTML = data.wind[0].speed + " km/h";
       temp[0].innerHTML = data.main[0].temp + " °c";
       location[0].innerHTML = data.name;
       description[0].innerHTML = data.weather[0].description;
    }

    return (
        <div className="container"> 
         
         <div className="top-bar">
            <input type="text" className="cityInput"   placeholder="search" onClick={() => {search()}}/>
         <div className="search" >
            <img src="src\components\assets\search.png" className="search-icon" onClick={() => {search()}}/>
          </div>
          </div>
           
           <div className="weather-image">
            <img src="src\components\assets\cloud.png" alt="weather-img"/>
           </div>

           <div className="weather-temp">24° </div>
           <div className="weather-location">Mumbai</div>
           <div className="data-container">
            <div className="element">
                <img src="src\components\assets\humidity.png" alt="" className="icon" />
               <div className="data">
                <div className="humidity-percentage">64%</div>
                <div className="text">Humidity</div>
               </div>
            </div>

            <div className="element">
                <img src="src\components\assets\wind.png" alt="" className="icon" />
                <div className="data">
                <div className=" wind-rate">18 km/h</div>
                <div className="text">Wind</div>
                </div>
            </div>
           </div>
        <div>
            <p className="description text icon weather-image">weather:  Happy weather today</p>
        </div>
        </div>
    )
}

export default weatherApp