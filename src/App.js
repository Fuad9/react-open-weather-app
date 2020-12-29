import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

import Loading from "./components/utilities/Loading";
import WeatherData from "./components/WeatherData/WeatherData";

function App() {
   const [loading, setLoading] = useState(false);
   const [search, setSearch] = useState("delhi");
   const [weatherData, setWeatherData] = useState({});

   /*setting up Api key in environment variables ============*/
   const API_KEY = process.env.REACT_APP_API_KEY;

   /* fetching data from openweathermap=========================== */
   useEffect(() => {
      const getData = async () => {
         try {
            setLoading(true);
            const response = await axios.get(
               `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&unit=metrics&q=
                  ${search}`
            );
            setWeatherData(response.data);
            setLoading(false);
         } catch (error) {
            setLoading(false);
         }
      };
      getData();
   }, [API_KEY, search]);

   return (
      <div className="App">
         <h1 className="text-uppercase text-center">Fetch the weather data of your city</h1>

         <div className="d-flex justify-content-center my-3">
            <input
               className="form-control w-50"
               type="text"
               onBlur={(e) => setSearch(e.target.value)}
               placeholder="type the name of your city"
            />

            <button className="btn btn-primary">search</button>
         </div>

         <div className="d-flex justify-content-center my-5">
            {loading ? <Loading /> : <WeatherData weatherData={weatherData} />}
         </div>
      </div>
   );
}

export default App;
