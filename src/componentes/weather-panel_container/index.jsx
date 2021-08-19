import "./style.css";
import LeftPanel from "../left-panel";
import RightPanel from "../right-panel";
import { useWeather } from "../../hook/weather";





function WeatherPanelContainer(props) {

    const [weather,updateByCity,updateByLocation] = useWeather();

    return (
        <div className="main-page_container">
            <LeftPanel imge={`https://openweathermap.org/img/wn/${weather.current?.weather[0].icon}@4x.png`} maindegrees={weather.current?.temp} degrees="ºc" mainday="Monday" hour="16:00" predictionuno="Mostly Cloudy" predictiondos={`Rain-${weather.hourly?.[0].pop}%`} onWeatherUpdateByCity={city=>updateByCity(city)}
            onWeatherUpdateByCurrentLocation= {()=> updateByLocation()}></LeftPanel>
            <RightPanel></RightPanel>
        </div>
    );
}


export default WeatherPanelContainer;