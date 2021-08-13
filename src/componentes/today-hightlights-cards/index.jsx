import "./style.css";



function TodayHightlightsCards(props){
    return(
        <div className="cards-hightlights_container">
            <p className="top_card">{props.hltstitle}</p>
            <p className="sun">{props.sunrice}</p>
            <h3 className="center_card">{props.centercard}<span className="medida">{props.medida}</span></h3>
            <p className="sun">{props.sunset}</p>
            <p className="res">{props.res}</p>
        </div>
    )
}
export default TodayHightlightsCards;