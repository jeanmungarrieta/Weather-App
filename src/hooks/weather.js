import { useState, useEffect } from "react";
import {
  getSevenDaysWeatherForecastByCurrentLocation,
  getSevenDaysWeatherForecastByCityName,
} from "../api/api";

/**
 * El custom hook nos ayuda a conectar todo lo necesario para poder recibir los datos del API y 
 * mostrarlos en la vista
 * @returns 
 */
export const useWeather = () => { // Custom Hook 
  const [weather, updateWeather] = useState({}); // variable de estado para controlar el resultado del API
  const [error, setError] = useState(''); // variable para gestionar el error cuando no encuentra ciudad
  const [cityName, setCityName] = useState(""); // variable de estado para guardar el nombre de la ciudad
  const [isCurrentLocation, setCurrentLocation] = useState(false); // variable para gestionar la solicitud de la localización

  useEffect(() => { // codigo asíncrono para cuando cambie la geolocalización y en la llamada inicial
    getSevenDaysWeatherForecastByCurrentLocation().then((d) => // solicito los datos a la API
      updateWeather(d) // actualizo mi varible de estado correspondiente al weather
    );
  }, [isCurrentLocation]); // hago saltar el useEffect tanto en el montado del componente como en la actualización de la solicitud de localización

  useEffect(() => { // codigo asíncrono para cuando cambie el nombre de ciudad
    if (cityName !== "") { // solo llamo si hay nombre de ciudad
      getSevenDaysWeatherForecastByCityName(cityName).then((d) => // Obtengo los datos del API por nombre de ciudad
        updateWeather(d) // actualizo la variable de estado del clima para actualizar la vista
      ).catch(err => setError(err.message)); //capturo los errores del API
    }
  }, [cityName]); // solo se ejecuta este effect en el montado y en la actualización del nombre de la ciudad

  /** 
   * expongo con el custom hook o necesario para la vista:
   *  - Los datos del API para que la vista los pinte
   *  - El error del API
   *  - Una funcion paa actualizar los datos por nombre de ciudad
   *  - Una funcion para actualizar los datos por localización actual
  */ 
  return [weather,error, setCityName, () => setCurrentLocation(prev => !prev) ] 
};
