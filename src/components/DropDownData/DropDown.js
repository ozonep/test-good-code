import React from "react";
import "./dropDown.css";
import CustomDropDown from "../DropDown/CustomDropDown";


export default function DropDown () {
    return (
        <div className="is-card-dark dropdown__container">
            <div className="dropdown__container-header is-light-text">
                <span>By Gender</span>
            </div>
            <div className="dropdown__container-content">
                <CustomDropDown title="Female" />
                <CustomDropDown title="Individuals" />
                <span className="dropdown__container--num">102</span>
            </div>
        </div>
    );
}
