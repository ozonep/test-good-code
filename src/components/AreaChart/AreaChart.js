import React from "react";
import { Line } from "react-chartjs-2";
import PropTypes from 'prop-types';
import "./areaChart.css";

const options = {
    maintainAspectRatio: true,
    legend: {
        display: false
    },
    labels: {
        display: false
    },
    responsive: true,
    scales: {
        xAxes: [{
            gridLines: {
                display: false,
                drawBorder: false
            },
            ticks: {
                padding: 2,
                fontColor: "#cccccc",
                fontStyle: "light"
            }
        }],
        yAxes: [{
            gridLines: {
                display: false,
                drawBorder: false
            },
            ticks: {
                stepSize: 3,
                padding: 10,
                fontColor: "#cccccc",
                fontStyle: "light"
            }
        }]
    }
};

// get Data and labels
export default function AreaChart ({ header, gradStart, gradMiddle, gradEnd }) {
    const getData = (canvas) => {
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, gradStart);
        gradient.addColorStop(0.5, gradMiddle || gradStart);
        gradient.addColorStop(1, gradEnd);

        return {
            labels: ["Jun'19", "Jul'19", "Aug'19", "Sep'19", "Oct'19", "Nov'19", "Dec'19"],
            datasets: [
                {
                    label: "Chart",
                    data: [0, 9, 5, 4, 5, 3, 4, 9, 12],
                    backgroundColor: gradient,
                    pointRadius: 0
                }
            ]
        };
    };
    const canvas = document.createElement("canvas");
    const chartData = getData(canvas);

    return (
        <div className="card grid-card is-card-dark areachart">
            <div className="card-heading">
                <div className="header is-text-white">{header}</div>
            </div>
            <div className="content" style={{ position: "relative", width: "100%" }}>
                <Line options={options} data={chartData} />
            </div>
        </div>
    );
}

AreaChart.propTypes = {
    header: PropTypes.string,
    gradStart: PropTypes.string,
    gradEnd: PropTypes.string,
    gradMiddle: PropTypes.string
};
