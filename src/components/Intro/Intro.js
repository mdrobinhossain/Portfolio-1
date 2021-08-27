import React, { useEffect, useRef } from 'react';
import './Intro.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { init } from 'ityped';


const Intro = () => {
    const textRef = useRef()
    
    useEffect(() => {
        init(textRef.current, { 
            showCursor: true,
            backDelay:1500,
            backSpeed:60,
             strings: ['Developer', 'Designer', 'Content Creator', 'Programmer' ] 
            })
    },[])
    return (
        <div className="intro" id='intro'>
           <div className="left">
               <div className="imgContainer">
                   <img src="asseets/profilerbg.png" alt="" />
               </div>
           </div>
           <div className="right">
               <div className="wrapper">
                   <h2>Hi There, I,m</h2>
                   <h1>Md. Robin</h1>
                   <h3>Freelance <span ref={textRef}></span></h3>
               </div>
               <a href="#portfolio">
                    <FontAwesomeIcon className="icon" icon={faAngleDown} />
               </a>
           </div>
        </div>
    );
};

export default Intro;