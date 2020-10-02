import React from 'react';
import Navbar from './container/Navbar/Navbar';
import Analyticsbar from './container/Analyticsbar/Analyticsbar';
import MainContent from './container/MainContent/Maincontent';


const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Analyticsbar />
            <MainContent />
        </div>
    );
};

export default App;
