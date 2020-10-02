import React from 'react';
import ChartNavigationItem from './ChartNavigationItem';
import "./chartNavigation.css";

export default function ChartNavigation () {
    return (
        <ul className="chartnavigation">
            <ChartNavigationItem name="Signups" active />
            <ChartNavigationItem name="Investments" />
            <ChartNavigationItem name="Revenue" />
            <ChartNavigationItem name="Exits" />
            <ChartNavigationItem name="Trades" />
        </ul>
    );
}
