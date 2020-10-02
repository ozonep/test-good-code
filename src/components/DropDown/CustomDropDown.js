import React, { useState, useRef, useEffect } from "react";
import PropTypes from 'prop-types';
import "./customDropDown.css";

const CustomDropDown = ({ title, transform, items }) => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);


    return (
        <div className="dd-wrapper" ref={ref}>
            <div
                tabIndex={0}
                className="dd-header"
                role="button"
                onKeyPress={() => toggle(!open)}
                onClick={() => toggle(!open)}
            >
                <div className="dd-header__title">
                    <span className={`dd-header__name bold ${transform ? "upper-text" : "cap-text"}`} >{title}</span>
                    {open ? (<h4>{"▲"}</h4>) : (<h4>{'▼'}</h4>)}
                </div>
            </div>
            <div
                className={`dd-menu ${open ? "show" : ""}`}
                aria-hidden="true"
                tabIndex="-1"
            >
                {open && (
                    <ul className="dd-list">
                        <li className="dd-list-item">
                            <button type="button" tabIndex="0" role="menuitem">One</button>
                        </li>

                        <li className="dd-list-item">
                            <button type="button" tabIndex="0" role="menuitem">two</button>
                        </li>
                        <li className="dd-list-item">
                            <button type="button" tabIndex="0" role="menuitem">three</button>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default CustomDropDown;

CustomDropDown.propTypes = {
    title: PropTypes.string,
    transform: PropTypes.bool,
    items: PropTypes.array
};
