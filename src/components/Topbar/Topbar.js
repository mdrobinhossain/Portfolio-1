import React from 'react';
import './Topbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Topbar = () => {
    return (
        <div className='topbar'>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">ROBIN.</a>
                    <div className="itemContainer">
                        <FontAwesomeIcon className="icon" icon={faUser} />
                        <snap>+880 1772784031</snap>
                    </div>

                    <div className="itemContainer">
                        <FontAwesomeIcon className="icon" icon={faEnvelope} />
                        <snap>mdrobin420hossain.com</snap>
                    </div>

                </div>
                <div className="right">
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line1"></span>
                        <span className="line1"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;