import "./style.css";
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import CloudIcon from '@material-ui/icons/Cloud';
import GrainSharpIcon from '@material-ui/icons/GrainSharp';



function LeftPanel(props) {
    return (
        <div className="left-panel_container">
            <div className="search_container">
                <input onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        props.onWeatherUpdateByCity(e.target.value);
                        e.target.value = '';
                    }
                }} className="input" type="text" placeholder="&#x1F50E;&#xFE0E; Search for places..." />
                <button onClick={ e => props.onWeatherUpdateByCurrentLocation()} className="button" ><LocationSearchingIcon /></button>
            </div>
            <div className="img_container">
                <img className="big_img" src={props.imge} alt="" />
                <h1 className="main_degrees">{props.maindegrees?.toFixed(1)}<span>{props.degrees}</span></h1>
                <p>{props.mainday},<span className="hour">{props.hour}</span></p>
            </div>
            <div className="predictions_container">
                <p className="predictions"><CloudIcon />{props.predictionuno}</p>
                <p className="predictions"><GrainSharpIcon />{props.predictiondos}</p>
            </div>
        </div>
    )
}
export default LeftPanel;

//"https://openweathermap.org/img/wn/10d@4x.png"
// CloudIcon/
// Mostly Cloudy