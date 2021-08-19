import { useState, useEffect } from "react";
import { getSevenDaysWeatherForecastByCurrentLocation, getSevenDaysWeatherForecastByCity } from "../API/api";


export const useWeather = () => {
    const [weather, updateWeather] = useState({});
    const [city, setCity] = useState('');
    const [isCurrentLocation, setCurrentLocation] = useState(false);


    useEffect(() => {
        getSevenDaysWeatherForecastByCurrentLocation().then((d) => updateWeather(d));
    }, [isCurrentLocation]);

    useEffect(() => {
        if (city !== '') {
            getSevenDaysWeatherForecastByCity(city).then(d => updateWeather(d));
        }
    }, [city]);


    return [weather, setCity, () =>setCurrentLocation(prev => !prev)]
}