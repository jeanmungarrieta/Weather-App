import "./style.css";
import LeftPanel from "../left-panel";
import RightPanel from "../right-panel";




function WeatherPanelContainer() {
    return (
        <div className="main-page_container">
            <LeftPanel></LeftPanel>
            <RightPanel></RightPanel>
        </div>
    );
}

export default WeatherPanelContainer;