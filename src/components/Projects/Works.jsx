import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Navbar';
import { Card, Container, Row, Col } from 'react-bootstrap';
import ClipLoader from 'react-spinners/BeatLoader';
import './work.scss';

const projects = [
  {
    imgsrc: require('../../asessts/huddle.png'),
    title: 'Huddle',
    text: 'A project used to test our skills in HTML and CSS in the bootcamp',
    builtwith: 'HTML, CSS',
    link: 'https://Kaluski01.github.io/Huddle',
  },
  {
    imgsrc: require('../../asessts/travelguide.png'),
    title: 'Tour and vacation',
    text: 'A website that displays sites for a vacation and tourism',
    builtwith: 'HTML, CSS',
    link: 'https://Kaluski01.github.io/Tour',
  },
  {
    imgsrc: require('../../asessts/art.png'),
    title: 'Art Graffiti',
    text: 'A website that displays different artworks from different artists',
    builtwith: 'HTML, CSS, Bootstrap',
    link: 'https://Kaluski01.github.io/PROJECT',
  },
  {
    imgsrc: require('../../asessts/movie.png'),
    title: 'Movie site',
    text: 'A web app that displays trending movies and an overview of it',
    builtwith: 'HTML, CSS, Bootstrap, JavaScript',
    link: 'https://moviesshow.vercel.app',
  },
  {
    imgsrc: require('../../asessts/pet.png'),
    title: 'Pet adoption website',
    text: 'A web app that accepts pet sellers and adopters on the same page and also displays pets added by the sellers.',
    builtwith: 'HTML, CSS, Bootstrap, JavaScript, React', 
    link: 'https://pet-adoption-seven.vercel.app',
  },
  {
    imgsrc: require('../../asessts/easy.PNG'),
    title: 'Easy-Bank landing Page',
    text: 'Built as a challenge from front-end websites website to test my knowledge',
    builtwith:'HTML, CSS, Bootstrap, JavaScript, React',
    link: 'https://easybank-dun.vercel.app/'
  }
];

export default function Works() {
  const [loader, setLoader] = useState(true);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (!loader) {
      projects.forEach((project, index) => {
        setTimeout(() => {
          setVisibleCards((prev) => [...prev, index]);
        }, index * 300);
      });
    }
  }, [loader]);

  return (
    <>
      <Sidebar />
      {loader ? (
        <div className="loader-container">
          <ClipLoader type="BeatLoader" className='loader' />
        </div>
      ) : (
        <Container>
          <Row className='d-flex justify-content-center'>
            {projects.map((project, index) => (
              <Col
                xs={8}
                md={6}
                lg={5}
                key={index}
                className={`mb-4 d-flex justify-content-center ${visibleCards.includes(index) ? 'card-visible' : ''}`}
              >
                <Card className={`card ${visibleCards.includes(index) ? 'card-visible' : ''}`}>
                  <Card.Img className="card-img-top h-100" variant="top" src={project.imgsrc} alt={project.title} />
                  <Card.Body className="card-body">
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.text}</Card.Text>
                    <Card.Text>Built-with: {project.builtwith}</Card.Text>
                  </Card.Body>
                  <Card.Body>
                    <Card.Link href={project.link}>{project.link}</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
}
