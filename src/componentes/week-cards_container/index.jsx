import "./style.css";
import CardDay from "../card-day";




function WeekCardsContainer (props){
    return(
        <div className="week-cards_container">
            <CardDay day="Sun" img="https://openweathermap.org/img/wn/10d@2x.png" maxtemp="15º" mintemp="-3º"></CardDay>
            <CardDay day="Mon" img="https://openweathermap.org/img/wn/10d@2x.png" maxtemp="15º" mintemp="-3º"></CardDay>
            <CardDay day="Tue" img="https://openweathermap.org/img/wn/10d@2x.png" maxtemp="15º" mintemp="-3º"></CardDay>
            <CardDay day="Wed" img="https://openweathermap.org/img/wn/10d@2x.png" maxtemp="15º" mintemp="-3º"></CardDay>
            <CardDay day="Thu" img="https://openweathermap.org/img/wn/10d@2x.png" maxtemp="15º" mintemp="-3º"></CardDay>
            <CardDay day="Fri" img="https://openweathermap.org/img/wn/10d@2x.png" maxtemp="15º" mintemp="-3º"></CardDay>
            <CardDay day="Sat" img="https://openweathermap.org/img/wn/10d@2x.png" maxtemp="15º" mintemp="-3º"></CardDay>
        </div>
        
    )
}
export default WeekCardsContainer;