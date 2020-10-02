import React from "react";
import "./pieChart.css";

import { Doughnut, Chart } from "react-chartjs-2";

const originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
    draw: function () {
        originalDoughnutDraw.apply(this, arguments);
        //Reflect.apply(originalDoughnutDraw, this, arguments);

        var chart = this.chart.chart;
        var ctx = chart.ctx;
        var width = chart.width;
        var height = chart.height;

        ctx.font = "600 " + 2 + "em Montserrat";
        ctx.fillStyle = "#c2d5eb";

        var text = chart.config.data.text;
        var textX = Math.round((width - ctx.measureText(text).width) / 2);
        var textY = height / 1.75;

        ctx.fillText(text, textX, textY);
    }
});

const options = {
    legend: {
        display: false
    },
    cutoutPercentage: 80
};

const data = {
    labels: ["Companies", "Individuals"],
    datasets: [
        {
            data: [364, 284],
            backgroundColor: ["#ff55ec", "#1cfae3"],
            hoverBackgroundColor: ["#ff55ec", "#1cfae3"],
            borderWidth: [0, 0, 0, 0]
        }
    ],
    text: 648
};

export default function Piechart () {
    return (
        <div className="piechart card is-card-dark">
            <div className="piechart__title">
                <h3 className="is-text-light">Total Signups</h3>
                <div className="piechart__title-legend">
                    <div className="legend__stat is-text-light">
                        <span className="title">Individuals</span>
                        <span className="num">364</span>
                    </div>
                    <div className="legend__stat is-text-light">
                        <span className="title">Companies</span>
                        <span className="num pink">284</span>
                    </div>
                </div>
            </div>
            <div className="piechart__content">
                <Doughnut options={options} data={data} />
            </div>
        </div>
    );
}
