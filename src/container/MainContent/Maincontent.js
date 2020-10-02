import React from 'react';
import SidePanel from './SidePanel/SidePanel';
import ChartsView from './ChartsView/ChartsView';
import "./mainContent.css";


export default function MainContent () {
    return (
        <main className="maincontent">
            <SidePanel />
            <ChartsView />
        </main>
    );
}
