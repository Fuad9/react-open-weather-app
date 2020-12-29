import React from "react";

const WeatherData = ({ weatherData }) => {
   return (
      <div>
         <h2>
            <span>City Name:</span> {weatherData?.name}, {weatherData?.sys?.country}
         </h2>
         <h3>
            <span>Time:</span> {new Date(weatherData?.dt * 1000).toLocaleTimeString()}
         </h3>
         <h3>
            <span>Sunrise:</span> {new Date(weatherData?.sys?.sunrise * 1000).toLocaleTimeString()}
         </h3>
         <h3>
            <span>Sunset:</span> {new Date(weatherData?.sys?.sunset * 1000).toLocaleTimeString()}
         </h3>
         <h3>
            <span>Latitude:</span> {weatherData?.coord?.lat}
         </h3>
         <h3>
            <span>Longitude:</span> {weatherData?.coord?.lon}
         </h3>
         <h3>
            <span>Temperature:</span> {(weatherData?.main?.temp - 273.15).toFixed(2)}°C
         </h3>
         <h3>
            <span>Minimum Temperature:</span> {(weatherData?.main?.temp_min - 273.15).toFixed(2)}°C
         </h3>
         <h3>
            <span>Maximum Temperature:</span> {(weatherData?.main?.temp_max - 273.15).toFixed(2)}°C
         </h3>
         <h3>
            <span>Humidity:</span> {weatherData?.main?.humidity}%
         </h3>
         <h3>
            <span>Pressure:</span> {(weatherData?.main?.pressure / 101.325).toFixed(2)}atm
         </h3>
         <h3>
            <span>Wind Speed:</span> {weatherData?.wind?.speed}km/h
         </h3>
      </div>
   );
};

export default WeatherData;
