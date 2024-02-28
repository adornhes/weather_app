import React, { useContext } from "react";

import MyContext from "../context/Attributes";
import ReactAnimatedWeather from "react-animated-weather";
import { WeatherData } from "./Api";

function Results() {
  const data = useContext(MyContext);

  const API_key = "appid=e78deee53585deaa025f8a1a58cab899";
  const city = data.value;
  const returned = WeatherData(city, API_key);
  const returned_data = returned.data;

  //console.log(returned_data.data)

  return (
    <div>
      {returned.loading ? (
        <p>Yükleniyor...</p>
      ) : (
        <div>
          <h1>
            {returned_data.name}
            <h2>Sicaklik: {returned_data.main.temp}C</h2>
            <h3>Hava Durumu:{returned_data.weather[0].description}</h3>
            <ReactAnimatedWeather
              icon={returned_data.weather[0].icon}
              color="white"
              size={100}
            />
          </h1>
        </div>
      )}
    </div>
  );
}

export default Results;
