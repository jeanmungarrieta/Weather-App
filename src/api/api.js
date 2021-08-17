import { api_key } from "../api-key";

// String con la URL base del API, común a todas las llamadas
const BASE_URL = "https://api.openweathermap.org/data/2.5";

/**
 * Función interna que dado una latitud y una longitud, realiza la llamada al API
 * PAra devolver la previsión de los próximos 7 días
 * Este API solo acepta latitud y longitud
 */
const getSevenDaysWeatherForecastByCoords = (lat, lon) =>
  fetch(
    `${BASE_URL}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=metric&appid=${api_key}`
  ) // fetch para recuperar los datos de tipo GET, la url tiene parametros para pasarle la latitud y la longitud
    .then((r) => r.json()) // procesamiento de la respuesta
    .then((d) => d); // devolución de los datos

/**
 * Función expuesta para obtener la previsión de los próximos 7 días dado un nombre de ciudad.
 * Como el API de previsión no acepta nombre de ciudad, hay que encadenar dos llamadas.
 *  - la primera para obtener las coordenadas por nombre de ciudad
 *  - la segunda llamando a nuestra función de la línea 11 con esas coordenadas 
 */
export const getSevenDaysWeatherForecastByCityName = (cityName) =>
  fetch(`${BASE_URL}/weather?q=${cityName}&units=metric&appid=${api_key}`) // formamos la URL para obtener las coordenadas por nombre de ciudad. tipo GET
    .then((r) =>{ // procesamos la respuesta lanzando un error si el servidor no devuelve una respuesta ok
        if(!r.ok) throw new Error('No se ha podido recuperar los datos de la ciudad');
        return r.json(); // si es ok devolver el formato tipo JSON
    })
    .then((d) => getSevenDaysWeatherForecastByCoords(d.coord.lat, d.coord.lon)); // con los datos devolvemos la promesa de la función de la linea 11, que cuando se resuelva devolverá los datos de la previsión que buscamos


/**
 * Funcion que obtiene la previsión de la localización actual.
 * Para ello devuelve una promesa en la que primero se obtiene la localización del navegador
 * y luego con esa posición se solicita la información al API para esas coords. 
 * Cuando se resuelva, resolvemos nuestra promesa de función con los datos
 */
export const getSevenDaysWeatherForecastByCurrentLocation = () =>
  new Promise((resolve) => { //devolvemos una nueva promesa para enapsular a quien llame todo el código asíncrono
    navigator.geolocation.getCurrentPosition((pos) => { // obtenemos del navegador la posición actual, mediante su callback
      // Cuando se llame el callback, tendremos  la posición y podremos llamar al API con los datos
      getSevenDaysWeatherForecastByCoords(
        pos.coords.latitude,
        pos.coords.longitude
      ).then((d) => resolve(d));// cuando se resuelva la promesa del API con los datos, podemos resolver la nuestra con los mismos datos
    });
  });
