import { APIKey } from "../api_key";


function getSevenDaysWeatherForecastByCoords(){
    return(
        fetch (
            `https://api.openweathermap.org/data/2.5/onecall?lat=${41.38879}&lon=${2.15899}&exclude=alerts,minutely&appid=${APIKey}`
        )
        .then((res)=>res.json())
        .then((data)=> console.log(data))
    )
}

export default getSevenDaysWeatherForecastByCoords;