import "./style.css";
import WeekCardsContainer from "../week-cards_container";
import TodayHightlights from "../today-hightlights_container";




function RightPanel() {
    return (
        <div className="right-panel_container">
            <div className="header_right">
                <p className="header_title">Week</p>
                <div className="button-header_container">
                    <button className="botton">ºC</button>
                    <button className="botton">ºF</button>
                </div>

            </div>
            <div>
                <WeekCardsContainer></WeekCardsContainer>
                <TodayHightlights></TodayHightlights>
            </div>
        </div>
    )
}
export default RightPanel;