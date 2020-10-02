import React from "react";
import "./sidepanel.css";
import Path from '../../assets/icons/Path_188.svg';
import Funds from '../../assets/icons/funds.svg';
import Group from '../../assets/icons/Group_174.svg';
import Verification from '../../assets/icons/verification-window-button.svg';
import Locked from '../../assets/icons/locked-padlock.svg';
import History from '../../assets/icons/history.svg';
import SidebarElement from "./SidebarElement";


export default function SidePanel () {
    return (
        <div className="sidepanel">
            <SidebarElement active Icon={Group} />
            <SidebarElement Icon={Funds} />
            <SidebarElement Icon={Path} />
            <SidebarElement Icon={History} />
            <SidebarElement Icon={Verification} />
            <SidebarElement Icon={Locked} />
        </div>
    );
}
