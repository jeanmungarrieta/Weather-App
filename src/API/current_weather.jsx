import { APIKey } from "../api_key";
import getSevenDaysWeatherForecastByCoords from "./one_call";

 
function  getCoordsByCityName(city) {
    return( 
        fetch (
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`
        )
        .then((res)=>res.json())
        .then((data)=>
            getSevenDaysWeatherForecastByCoords(data.coords)
        )
    )
}

export default  getCoordsByCityName;