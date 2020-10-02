import React from "react";
import PropTypes from 'prop-types';
import "./table.css";

const Row = ({ name, date }) => {
    return (
        <div className="custom__table-row">
            <div className="custom__table-col">{name}</div>
            <div className="custom__table-col">{date}</div>
        </div>
    );
};

export default function Table () {
    return (
        <div className="custom__table card is-card-dark">
            <div className="custom__table-header">
                <h3 className="is-light-text">Latest Signups</h3>
                <div className="custom__table-title">
                    <Row name="Name" date="Scheduled Meeting" />
                </div>
            </div>

            <div className="custom__table-body">
                <Row name="David Hansen" date="02-03-2020 - 2PM" />
                <Row name="Shopify" date="05-03-2020 - 4PM" />
                <Row name="Arvid, Realtree AB" date="05-03-2020 - 3PM" />
            </div>
        </div>
    );
}


Row.propTypes = {
    name: PropTypes.string,
    date: PropTypes.string
};
