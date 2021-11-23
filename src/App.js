import React from 'react';
import "./style.css"
import Navigation from './Navigation';
import Masthead from './Masthead';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Copyright from './Copyright';
import PortfolioModals from './PortfolioModel';

const App = () => {
    return (
        <div>
            <Navigation />
            <Masthead />
            <Portfolio />
            <About />
            <Contact />
            <Footer />
            <Copyright />
            <PortfolioModals />
        </div>
    );
}

export default App;