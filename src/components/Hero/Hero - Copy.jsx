import React  from 'react';
import {useState} from 'react'
import { Link } from 'react-router-dom';
import './Hero.scss';
import Logo from '../../asessts/images-removebg-preview.png';

export default function Hero() {
 
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['i','v','i','n','e']
  constjobArray = ['w','e','b','', 'd','e','v','e','l','o','p','e','r', '.']
  return (
    <div className='container mt-3 home-page'>
      <div className='row'>
        <div className="col-lg-10 col-12 parent">
          <h1> Hello!<br />I'm
              <img className='image' src={Logo} alt="Developer" /> 
    
            <br />
            web-developer
          </h1>
          <h3>Front-end Developer/Javascript Expert/ Graphic-designer</h3>
          <Link to="/contact">Contact me</Link>
        </div>
      </div>
    </div>
  );
}

