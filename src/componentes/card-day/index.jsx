import { PinDropSharp } from "@material-ui/icons";
import "./style.css";



function CardDay(props) {
    return (
        <div className="card_container">
            <h5>{props.day}</h5>
            <img src={props.img} alt="" />
            <p className="min-max-temp">{props.maxtemp}<spam className="min-temp">{props.mintemp}</spam></p>
        </div>

    )
}
export default CardDay;

//https://openweathermap.org/img/wn/10d@2x.png"
//15º-3º