import { APIKey } from "../api_key";




function getSevenDaysForecastWeatherByCoords(lat, lon){
    return(
        fetch (
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,minutely&appid=${APIKey}`
        )
        .then((res)=>res.json())
        .then((data)=>console.log(data))
    )
}

export default getSevenDaysForecastWeatherByCoords;

// //41.38879
// //lon 2.15899