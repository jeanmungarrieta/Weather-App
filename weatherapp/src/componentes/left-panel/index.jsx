import "./style.css";
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import CloudIcon from '@material-ui/icons/Cloud';
import GrainSharpIcon from '@material-ui/icons/GrainSharp';


function LeftPanel (){
    return(
        <div className="left-panel_container">
            <div className="search_container">
                <input className="input" type="text" placeholder= "&#x1F50E;&#xFE0E; Search for places..."/>
                <button className="button"><LocationSearchingIcon/></button>
            </div>
            <div className="img_container">
                <img src="https://openweathermap.org/img/wn/10d@4x.png" alt="" />
                <h1 className="main_degrees">12ºc</h1>
                <p>Monday, 16:00</p>
            </div>
            <div className="predictions_container">
                <p><CloudIcon/>Mostly Cloudy</p>
                <p><GrainSharpIcon/>Rain - 30%</p>
            </div>
        </div>
    )
}
export default LeftPanel;