import React from "react";
import PropTypes from 'prop-types';
import "./sidebarElement.css";

export default function SidebarElement ({ Icon, active }) {
    return (<div className={`sidebarElement ${active ? "sidebarOption--active" : ''}`}><Icon /></div>);
}

SidebarElement.propTypes = {
    Icon: PropTypes.func,
    active: PropTypes.bool
};

