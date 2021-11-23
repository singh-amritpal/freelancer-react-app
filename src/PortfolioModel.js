import React from 'react';
import PortfolioModalItem from './PortfolioModalItem';

const PortfolioModals = () => {
    return (
        <div>
            <PortfolioModalItem id="portfolioModal1" label="portfolioModal1"
                title="Log Cabin" imageSource="assets/img/portfolio/cabin.png" />
            <PortfolioModalItem id="portfolioModal2" label="portfolioModal2"
                title="Tasty Cake" imageSource="assets/img/portfolio/cake.png" />
            <PortfolioModalItem id="portfolioModal3" label="portfolioModal3"
                title="Circus Tent" imageSource="assets/img/portfolio/circus.png" />
            <PortfolioModalItem id="portfolioModal4" label="portfolioModal4"
                title="Controller" imageSource="assets/img/portfolio/game.png" />
            <PortfolioModalItem id="portfolioModal5" label="portfolioModal5"
                title="Locked Safe" imageSource="assets/img/portfolio/safe.png" />
            <PortfolioModalItem id="portfolioModal6" label="portfolioModal6"
                title="Submarine" imageSource="assets/img/portfolio/submarine.png" />
        </div>
    );
}

export default PortfolioModals;