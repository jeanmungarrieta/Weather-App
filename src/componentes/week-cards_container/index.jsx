import "./style.css";
import CardDay from "../card-day";




function WeekCardsContainer (){
    return(
        <div className="week-cards_container">
            <CardDay></CardDay>
            <CardDay></CardDay>
            <CardDay></CardDay>
            <CardDay></CardDay>
            <CardDay></CardDay>
            <CardDay></CardDay>
            
        </div>
        
    )
}
export default WeekCardsContainer;