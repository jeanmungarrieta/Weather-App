import "./style.css";
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import CloudIcon from '@material-ui/icons/Cloud';
import GrainSharpIcon from '@material-ui/icons/GrainSharp';


function LeftPanel (props){
    const handleKeyPress =(e) => { // función para gestionar el evento keypress del input y asi mandar al padre la info
        if(e.key === 'Enter'){ // solo mandamos al padre si la tecla pulsada es 'Intro'
            // llamar al padre
            props.onWeatherUpdateByCityName(e.target.value); // Llamo al padre utilizando su prop y pasando el valor del input
            e.target.value = ''; //Vacio el input
        }
      }
    return(
        <div className="left-panel_container">
            <div className="search_container">
                <input onKeyPress={handleKeyPress} /** asocio el handler con la función del evento del input */
                 className="input" type="text" placeholder= "&#x1F50E;&#xFE0E; Search for places..." />
                <button onClick={e => props.onWeatherUpdateByCurrentLocation()} /** asocio el click del boton a una función que llama al padre para pedirle que actualice por localización*/ 
                    className="button"><LocationSearchingIcon/></button>
            </div>
            <div className="img_container">
                <img src={props.imge} alt="" />
                <h1 className="main_degrees">{props.maindegrees?.toFixed(1)}<span>{props.degrees}</span></h1>
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