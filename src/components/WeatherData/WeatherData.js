import React from "react";

const WeatherData = ({ weatherData }) => {
   const { name, dt } = weatherData;
   const { country, sunrise, sunset } = weatherData.sys;
   const { lat, lon } = weatherData.coord;
   const { temp, temp_min, temp_max, humidity, pressure } = weatherData.main;
   const { main, icon } = weatherData.weather[0];
   const { speed, deg } = weatherData.wind;

   console.log(((temp - 32) * (5 / 9)).toFixed(2));

   return (
      <>
         <h2>
            City Name: {name}, {country}
         </h2>
         <h3>Time: {new Date(dt * 1000).toLocaleTimeString()}</h3>
         <h3>Time: {new Date(sunrise * 1000).toLocaleTimeString()}</h3>
         <h3>Time: {new Date(sunset * 1000).toLocaleTimeString()}</h3>
         <h3>Time: {new Date(sunset * 1000).toLocaleTimeString()}</h3>
         <h3>Latitude: {lat}</h3>
         <h3>Longitude: {lon}</h3>
         <h3>Temperature: {((temp - 32) * (5 / 9)).toFixed(2)}</h3>
         <h3>Minimum Temperature: {temp_min}</h3>
         <h3>Maximum Temperature: {temp_max}</h3>
      </>
   );
};

export default WeatherData;
