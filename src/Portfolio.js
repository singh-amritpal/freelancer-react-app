import React from 'react';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
    return (
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                {/* Portfolio Section Heading */}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                {/* Icon Divider */}
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* Portfolio Grid Items */}
                <div className="row justify-content-center">
                    {/* Portfolio Item 1 */}
                    <div className="col-md-6 col-lg-4 mb-5">
                        <PortfolioItem itemSource="assets/img/portfolio/cabin.png" dataTarget="#portfolioModal1" />
                    </div>
                    {/* Portfolio Item 2 */}
                    <div className="col-md-6 col-lg-4 mb-5">
                        <PortfolioItem itemSource="assets/img/portfolio/cake.png" dataTarget="#portfolioModal2" />
                    </div>
                    {/* Portfolio Item 3 */}
                    <div className="col-md-6 col-lg-4 mb-5">
                        <PortfolioItem itemSource="assets/img/portfolio/circus.png" dataTarget="#portfolioModal3" />
                    </div>
                    {/* Portfolio Item 4 */}
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <PortfolioItem itemSource="assets/img/portfolio/game.png" dataTarget="#portfolioModal4" />
                    </div>
                    {/* Portfolio Item 5 */}
                    <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <PortfolioItem itemSource="assets/img/portfolio/safe.png" dataTarget="#portfolioModal5" />
                    </div>
                    {/* Portfolio Item 6 */}
                    <div className="col-md-6 col-lg-4">
                        <PortfolioItem itemSource="assets/img/portfolio/submarine.png" dataTarget="#portfolioModal6" />
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Portfolio;