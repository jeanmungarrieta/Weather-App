import "./style.css";
import TodayHightlightsCards from "../today-hightlights-cards";




function TodayHightlights (){
    return(
        <div className="today-hightlights_container">
            <p className="bottom_title">Today`s Highlights</p>
            <div className="t-h_container" >
            <TodayHightlightsCards hltstitle="UV Index" centercard="5"></TodayHightlightsCards>
            <TodayHightlightsCards hltstitle="Wind Status" centercard="12" medida=" km/h"></TodayHightlightsCards>
            <TodayHightlightsCards hltstitle="Sunrice - Sunset" centercard="" sunrice="6.35AM" sunset="5.42PM"></TodayHightlightsCards>
            <TodayHightlightsCards hltstitle="Humidity" centercard="12" medida=" %" res="Normal"></TodayHightlightsCards>
            <TodayHightlightsCards hltstitle="Visibility" centercard="5.2" medida=" km/h" res="Average"></TodayHightlightsCards>
            </div>
            
        </div>
        
    )
}
export default TodayHightlights;