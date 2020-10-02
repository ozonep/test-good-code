import React from 'react';
import PropTypes from 'prop-types';
import "./analyticsbar.css";
import CustomDropDown from '../../components/DropDown/CustomDropDown';

function AnalyticsItem ({ header, num, color }) {
    return (
        <div className="analyticsbar__item">
            <span className="title">{header}</span>
            <span className="num" style={{ color: `${color}` }}>{num}</span>
        </div>
    );
}


const Analyticsbar = () => {
    return (
        <nav className="analyticsbar">
            <ul className="analyticsbar__list">
                <li><a href="#" className="analyticsbar__item drop"><CustomDropDown title="Overview" /></a></li>
                <li><AnalyticsItem color={"#4effa1"} header="Total signups" num="648" /></li>
                <li><AnalyticsItem color={"#ff56ee"} header="Last week" num="12" /></li>
                <li><AnalyticsItem color={"#1bfbe4"} header="Total investments" num="102"/></li>
                <li><AnalyticsItem color={"#4effa1"} header="Average investment" num="NOK 345,565"/></li>
                <li><AnalyticsItem color={"#ff56ee"} header="Total exits" num="23" /></li>
            </ul>
        </nav>
    );
};

export default Analyticsbar;

AnalyticsItem.propTypes = {
    header: PropTypes.string,
    num: PropTypes.string,
    color: PropTypes.string
};
