import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import Loading from "./components/utilities/Loading";
import WeatherData from "./components/WeatherData/WeatherData";

function App() {
   const [loading, setLoading] = useState(false);
   const [search, setSearch] = useState("");
   const [weatherData, setWeatherData] = useState({});

   useEffect(() => {
      const getData = async () => {
         try {
            setLoading(true);
            const response = await axios.get(
               "https://api.openweathermap.org/data/2.5/weather?appid=c0a13cdeb3f7cac0507317486f399f72&q=" +
                  search
            );
            setWeatherData(response.data);
            setLoading(false);
         } catch (error) {
            setLoading(false);
         }
      };
      getData();
   }, [search]);

   const { name, dt } = weatherData;
   //  const { sunrise, sunset } = weatherData.sys;
   const { lat, lon } = weatherData.coord;
   const { temp, temp_min, temp_max, humidity, pressure } = weatherData.main;
   const { main, icon } = weatherData.weather[0];
   const { speed, deg } = weatherData.wind;

   return (
      <div className="App">
         <div className="d-flex justify-content-center my-3">
            <input
               className="form-control w-50"
               type="text"
               onBlur={(e) => setSearch(e.target.value)}
               placeholder="search products"
            />
            <button className="btn btn-success">Search</button>
         </div>

         {loading ? (
            <Loading />
         ) : (
            <div>
               <h2>City Name: {name}</h2>
               <h3>Time: {new Date(dt * 1000).toLocaleTimeString()}</h3>
               {/* <h3>Time: {new Date(sunrise * 1000).toLocaleTimeString()}</h3>
               <h3>Time: {new Date(sunset * 1000).toLocaleTimeString()}</h3>
               <h3>Time: {new Date(sunset * 1000).toLocaleTimeString()}</h3> */}
               <h3>Latitude: {lat}</h3>
               <h3>Longitude: {lon}</h3>
               <h3>Temperature: {((temp - 32) * (5 / 9)).toFixed(2)}</h3>
               <h3>Minimum Temperature: {temp_min}</h3>
               <h3>Maximum Temperature: {temp_max}</h3>
            </div>
         )}
      </div>
   );
}

export default App;
