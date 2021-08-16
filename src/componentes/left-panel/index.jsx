import "./style.css";
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import CloudIcon from '@material-ui/icons/Cloud';
import GrainSharpIcon from '@material-ui/icons/GrainSharp';
import getSevenDaysWeatherForecastByCoords from "../../API/one_call";
import getSevenDaysForecastWeatherByCityName from "../../API/current_weather";


function LeftPanel (props){
    return(
        <div className="left-panel_container">
            <div className="search_container">
                <input className="input" type="text" placeholder= "&#x1F50E;&#xFE0E; Search for places..." onClick= {(e)=>{
                    let city= e.target.value;
                    getSevenDaysForecastWeatherByCityName(city)
                }}/>
                <button className="button" onClick= {(e)=>{getSevenDaysWeatherForecastByCoords()}}><LocationSearchingIcon/></button>
            </div>
            <div className="img_container">
                <img className="big_img" src={props.imge} alt="" />
                <h1 className="main_degrees">{props.maindegrees}<span>{props.degrees}</span></h1>
                <p>{props.mainday},<span className="hour">{props.hour}</span></p>
            </div>
            <div className="predictions_container">
                <p className="predictions"><CloudIcon/>{props.predictionuno}</p>
                <p className="predictions"><GrainSharpIcon/>{props.predictiondos}</p>
            </div>
        </div>
    )
}
export default LeftPanel;

//"https://openweathermap.org/img/wn/10d@4x.png"
// CloudIcon/
// Mostly Cloudy