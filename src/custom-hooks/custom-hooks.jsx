// import { useState, useEffect } from 'react';
// import getSevenDaysWeatherForecastByCoords from '../API/one_call';

// function ActualState() {
//     const [cityName, setCityName] = useState("Loading...");
//     const [coord, setCoord] = useState();
//     const [weekForecast, setWeekForecast] = useState([]);
//     const [currentLocation, setCurrentLocation] = useState({
//         current: {
//             dt: 0,
//             temp: 0,
//             sunrise: 0,
//             sunset: 0,
//             humidity: 0,
//             uvi: 0,
//             wind_speed: 0,
//             visibility: 0,
//             weather: [
//                 {
//                     id: 0,
//                     main: "",
//                     description: "",
//                     icon: "",
//                 },
//             ],
//         },
//         hourly: [
//             {
//                 pop: 0,
//             },
//         ],
//     });

//     const getSevenDaysWeatherForecastByCoords = (data) => {
//         setCurrentLocation(data);
//         setWeekForecast(data.daily);

//     };

//     const getGeolocation = () => {
//         let auxLat;
//         let auxLon;
//         navigator.geolocation.getCurrentPosition((pos) => {
//             auxLat = pos.coords.latitude;
//             auxLon = pos.coords.longitude;
//             getSevenDaysWeatherForecastByCoords(auxLon, auxLat);
//             setCityName('Your location');
//         });
//     };

//     useEffect(() => {
//         getGeolocation();
//     }, []);




//     return (setCurrentLocation)
// }

// export default ActualState;



