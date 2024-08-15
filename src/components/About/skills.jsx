import React from 'react';
import './skills.scss';
import Sidebar from '../Sidebar/Navbar';
import AnimatedLetters from '../Animated letters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import ClipLoader from 'react-spinners/BeatLoader';

export default function Skills() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover');
      setLoader(false);
    }, 3000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <>
      <Sidebar />
      <div className="container skills">
        {loader ? (
          <div className="loader-container ">
            <ClipLoader type="BeatLoader"className='loader'/>
          </div>
        ) : (
          <div className="row w-100 d-flex">
            <div className="col-lg-8 col-12">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e', '/', 'S', 'k', 'i', 'l', 'l', 's']}
                  idx={15}
                />
              </h1>
              <div>
                <p>
                  I am a Front-end developer and graphic designer
                  looking for a role in an established IT company and also
                  startup business with the opportunity to work with the latest
                  technologies on challenging and diverse projects.
                </p>
                <p>
                  I'm confident, naturally curious, and perpetually eager
                  to learn and work on improving my take on designs and incoming
                  technologies.
                </p>
                <p>I've mastered skills like Html, Css, Git, Javascript, React which has helped me in building some of my projects.</p>
              </div>
            </div>
            <div className="col-lg-2 col-8 icon-container">
              <div className="stage-cube-cont">
                <div className="cubespinner">
                  <div className="face1">
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    <p>Javascript</p>
                  </div>
                  <div className="face2">
                    <FontAwesomeIcon icon={faCss3} color="#F06529" />
                    <p>Css</p>
                  </div>
                  <div className="face3">
                    <FontAwesomeIcon icon={faGitAlt} color="#2BA4D9" />
                    <p>Git</p>
                  </div>
                  <div className="face4">
                    <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
                    <p>Html</p>
                  </div>
                  <div className="face5">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    <p>React</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
