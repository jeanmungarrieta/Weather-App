import "./style.css";
import LeftPanel from "../left-panel";
import RightPanel from "../right-panel";
import { useWeather } from "../../hooks/weather";
import React from "react";

function WeatherPanelContainer(props) {
  // Utilizo en la vista mi custom hook
  const [weather, error, updateByCityName, updateByLocation] = useWeather();

  return (
    <div className="main-page_container">
      {error !== "" ? ( // Si hay error pinto el error en un p
        <p>{error}</p>
      ) : (
        <React.Fragment>
          <LeftPanel
            imge={`https://openweathermap.org/img/wn/${weather.current?.weather[0].icon}@2x.png`}
            maindegrees={weather.current?.temp} // utilizo mis datos del API para pintar las props de mis hijos, teniendo cuidado cuando no tenga todavía datos del API
            degrees="ºc"
            mainday="Monday"
            hour="16:00"
            predictionuno="Mostly Cloudy"
            predictiondos={`Rain-${weather.hourly?.[0].pop}%`}
            //Prop para que el hijo pueda avisar al padre que quiere actualizar los datos con un nuevo cityName
            onWeatherUpdateByCityName={(cityName) => updateByCityName(cityName)}
            // Prop para que el hijo pueda avisar al padre que quiere actualizar los datos por localización actual
            onWeatherUpdateByCurrentLocation={() => updateByLocation()}
          ></LeftPanel>
          <RightPanel></RightPanel>
        </React.Fragment>
      )}
    </div>
  );
}

export default WeatherPanelContainer;
