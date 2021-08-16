import "./style.css";
import LeftPanel from "../left-panel";
import RightPanel from "../right-panel";
import React, { useEffect, useState } from "react";
import getSevenDaysForecastWeatherByCityName from "../../API/current_weather";




function WeatherPanelContainer(props) {
    const [weatherForecast, updateWeatherForecast] = useState({})

    useEffect(() => {
        getSevenDaysForecastWeatherByCityName('Barcelona').then(data => updateWeatherForecast(data));
    },[]);

    return (
        <div className="main-page_container">
            <LeftPanel imge="https://openweathermap.org/img/wn/10d@4x.png" maindegrees="13" degrees="ºc" mainday="Monday" hour="16:00" predictionuno="Mostly Cloudy" predictiondos="Rain-30%"></LeftPanel>
            <RightPanel></RightPanel>
        </div>
    );
}

export default WeatherPanelContainer;