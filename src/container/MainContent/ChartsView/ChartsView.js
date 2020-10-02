import React from "react";
import "./chartsView.css";
import ChartNavigation from "./ChartNavigation/ChartNavigation";
import Table from "../../../components/Table/Table";
import AreaChart from "../../../components/AreaChart/AreaChart";
import PieChart from "../../../components/PieChart/Piechart";
import DropDown from "../../../components/DropDownData/DropDown";


export default function ChartsView () {
    return (
        <div className="charts pt-4">
            <div className="chartsview__navigation mb-4">
                <ChartNavigation />
                <hr />
            </div>
            <div className="chartsview pt-4">
                <div className="chartsview__left">
                    <div className="chartsview__left-above">
                        <AreaChart header="Individuals" gradStart="#4effcf" gradMiddle="#254f67" gradEnd="#08a4bc" />
                    </div>
                    <div className="chartsview__left-below">
                        <AreaChart header="Companies" gradStart="#ff55ec" gradMiddle="#291c41" gradEnd="#060613" />
                    </div>
                </div>
                <div className="chartsview__right">
                    <div className="chartsview__right-above">
                        <PieChart />
                    </div>
                    <div className="chartsview__right-middle">
                        <DropDown />
                    </div>
                    <div className="chartsview__right-below">
                        <Table />
                    </div>
                </div>
            </div>
        </div>
    );
}

