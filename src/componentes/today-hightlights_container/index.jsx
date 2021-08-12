import "./style.css";
import TodayHightlightsCards from "../today-hightlights-cards";




function TodayHightlights (){
    return(
        <div className="today-hightlights_container">
            <p className="bottom_title">Today`s Highlights</p>
            <div className="t-h_container" >
            <TodayHightlightsCards></TodayHightlightsCards>
            <TodayHightlightsCards></TodayHightlightsCards>
            <TodayHightlightsCards></TodayHightlightsCards>
            <TodayHightlightsCards></TodayHightlightsCards>
            <TodayHightlightsCards></TodayHightlightsCards>
            </div>
            
        </div>
        
    )
}
export default TodayHightlights;