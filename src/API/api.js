import { APIKey } from "../api_key";

const BASE_URL = "https://api.openweathermap.org/data/2.5";


export const getSevenDaysWeatherForecastByCoords = (lat, lon) => fetch(`${BASE_URL}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=metric&appid=${APIKey}
`).then(r => r.json()).then(d => d);


export const getSevenDaysWeatherForecastByCity = city => fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${APIKey}`).then(r => r.json()).then(d => getSevenDaysWeatherForecastByCoords(d.coord.lat, d.coord.lon));


export const getSevenDaysWeatherForecastByCurrentLocation = () =>
    new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(pos => {
            getSevenDaysWeatherForecastByCoords(pos.coords.latitude, pos.coords.longitude).then(d=> resolve(d))
        });
    });