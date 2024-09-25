import React from 'react';
// import { Link } from 'react-router-dom';
import { IoMdHome, IoMdContact } from 'react-icons/io';
import { GrProjects } from 'react-icons/gr';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GiSkills } from "react-icons/gi";
import './Navbar.scss';
import Logo from '../../asessts/Logo.png'

function Sidebar() {
  return (
    <>
            <Navbar expand="lg" >
              <Container className='w-100'>
                <Navbar.Brand className='logo' >
                  <img src={Logo} alt="Divine" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='container'>
                  <Nav className=" ms-auto holder">
                    <Nav.Link href="/" className="navlink" title="Home">
                      <IoMdHome className='icon' />
                    </Nav.Link>
                    <Nav.Link href="/skills" className="navlink" title="About / Skills">
                        <GiSkills className='icon'/>
                    </Nav.Link>
                    <Nav.Link href="/Works" className="navlink" title="Projects">
                      <GrProjects className='icon' /> 
                    </Nav.Link>
                    <Nav.Link href="/contact" className="navlink" title="Contact">
                      <IoMdContact className='icon' />
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

    </>
  );
}

export default Sidebar;
