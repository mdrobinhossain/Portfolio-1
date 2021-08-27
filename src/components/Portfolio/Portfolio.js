import React from 'react';
import './Portfolio.scss';

const Portfolio = () => {
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Featured</li>
                <li>Web App</li>
                <li>Mobile App</li>
                <li>Design</li>
                <li>Branding</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://i0.wp.com/www.sktthemes.org/wp-content/uploads/2020/12/Finance.jpg?resize=545%2C309&ssl=1" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://i0.wp.com/www.sktthemes.org/wp-content/uploads/2020/12/Finance.jpg?resize=545%2C309&ssl=1" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://i0.wp.com/www.sktthemes.org/wp-content/uploads/2020/12/Finance.jpg?resize=545%2C309&ssl=1" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://i0.wp.com/www.sktthemes.org/wp-content/uploads/2020/12/Finance.jpg?resize=545%2C309&ssl=1" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://i0.wp.com/www.sktthemes.org/wp-content/uploads/2020/12/Finance.jpg?resize=545%2C309&ssl=1" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://i0.wp.com/www.sktthemes.org/wp-content/uploads/2020/12/Finance.jpg?resize=545%2C309&ssl=1" alt="" />
                    <h3>Banking App</h3>
                </div>
            </div>

        </div>
    );
};

export default Portfolio;