import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.scss';
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
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
          <div className="hold">
                <div className='d-flex'>
                    <a href="https://wa.me/09019755712" className='mx-2'>
                      <FaWhatsapp />
                    </a>
                    <a href="https://twitter.com/@KALUSKI001" className='mx-2'>
                      <FaXTwitter />
                                    </a>
                  <a href="https://www.linkedin.com/in/Kaluski" className='mx-2'>
                    <FaLinkedin />
                  </a>
                </div>

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
    </div>
  );
}
