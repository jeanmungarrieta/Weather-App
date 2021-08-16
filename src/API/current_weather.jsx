import { APIKey } from "../api_key";
import getSevenDaysForecastWeatherByCoords from "./one_call";

 
function  getSevenDaysForecastWeatherByCityName(city) {
    return( 
        fetch (
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&exclude=alerts,minutely&appid=${APIKey}`
        )
        .then((res)=>res.json())
        .then(data => getSevenDaysForecastWeatherByCoords(data.coord.lat, data.coord.lon))
        
    )
}

export default getSevenDaysForecastWeatherByCityName;