import "./style.css";



function CardDay(props) {
    return (
        <div className="card_container">
            <h5>{props.day}</h5>
            <img className="img_day" src={props.img} alt="" />
            <p className="min-max-temp">{props.maxtemp}<span className="min-temp">{props.mintemp}</span></p>
        </div>

    )
}
export default CardDay;

//https://openweathermap.org/img/wn/10d@2x.png"
//15º-3º