import "./style.css";
import WeekCardsContainer from "../week-cards-container";
import TodayHightlights from "../todayhightlights-container";




function RightPanel (){
    return(
        <div>
            <div>
                <p></p>
                <button></button>
                <button></button>
            </div>
            <div>
                <WeekCardsContainer></WeekCardsContainer>
                <TodayHightlights></TodayHightlights>
            </div>
        </div>
    )
}
export default RightPanel;