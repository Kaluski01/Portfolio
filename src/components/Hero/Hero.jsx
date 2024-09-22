import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.scss';
import AnimatedLetters from '../Animated letters';
import 'animate.css';

export default function Hero() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = [' ', 'D', 'i', 'v', 'i', 'n', 'e'];
  const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className="col-lg-12 col-12">
          <h1>
            <span className={`${letterClass} _1`}>H</span>
            <span className={`${letterClass} _2`}>e</span>
            <span className={`${letterClass} _3`}>l</span>
            <span className={`${letterClass} _4`}>l</span>
            <span className={`${letterClass} _5`}>o</span>
            <span className={`${letterClass}`}>👋</span>
            <br />
            <span className={`${letterClass} _6`}>I</span>
            <span className={`${letterClass} _7`}>'m</span>
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={8} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={14} />
          </h1>
          <br />
          <span>Front-end Developer / JavaScript Expert / Graphic Designer</span>
          <br />
          <Link to="/contact" className='contact-link'>Contact me</Link>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}
