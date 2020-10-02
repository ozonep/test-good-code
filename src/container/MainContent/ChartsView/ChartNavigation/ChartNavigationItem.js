import React from "react";
import PropTypes from 'prop-types';

export default function ChartNavigationItem ({ name, active }) {
    return (
        <li className="nav-item">
            <a className={`nav-link ${active && "active"}`}>{name}</a>
        </li>
    );
}


ChartNavigationItem.propTypes = {
    name: PropTypes.string,
    active: PropTypes.bool
};
