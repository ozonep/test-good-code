import React from 'react';
import logo from '../assets/images/logo.png';
import avatar from '../assets/images/avatar.png';

import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="navbar__right">
                <ul className="navbar__list">
                    <li><a href="#" className="navbar__list-item">Account</a></li>
                    <li><a href="#" className="navbar__list-item">Charts</a></li>
                    <li><a href="#" className="navbar__list-item">Help</a></li>
                </ul>
                <div className="profile">
                    <div className="profile__info">
                        <img src={avatar} alt="avatar" className="profile__info-avatar"/>
                        <span className="profile__info-username">Elise Andersen</span>
                    </div>
                    <div className="date_and_time">
                        <span className="date">12-10-1995</span>
                        <span className="time">12.45 AM</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
