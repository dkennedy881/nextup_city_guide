import React from "react"

import { BarChartGraphic } from "./BarChartGraphic";

const Greeting = () => {


    return <div className="container-fluid" style={{ backgroundColor: "turquoise", height: "75vh", borderBottomStyle: "solid", borderBottomColor: "red" }}>
        <div className="row" >
            <div className="col-md-7" id="GreetingTextContainer">
                <h2 id="GreetingTitle" style={{ color: "white", fontWeight: "800" }}>Become a Partner or Tour the City</h2>
                <h4 id="GreetingSubTitle" style={{ color: "yellow", fontWeight: "300" }}>City Guide</h4>
            </div>
            <div className="col-md-5" style={{ display: "flex", justifyContent: "center" }}>
                <BarChartGraphic />
            </div>
        </div>
    </div>
}

export { Greeting };
