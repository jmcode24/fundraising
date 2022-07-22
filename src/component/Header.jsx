import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import Image from './Image';
import logo from '../images/logo.png'

export default function Header () {

  return (
    <Navbar variant="light" bg="dark" className='py-3'>
        <Container>
          <Navbar.Brand><Image logo={logo}/></Navbar.Brand>
          <Nav className="mx-auto nav-item">
            <Nav.Link><span className='text-info fw-bold'>Explore</span></Nav.Link>
            <Nav.Link><span className='text-info fw-bold'>How it works?</span></Nav.Link>
            <Nav.Link><span className='text-info fw-bold'>About</span></Nav.Link>
          </Nav>
          <Nav className="ms-auto nav-item">
            <Nav.Link><Button  variant="outline-success">Log in</Button></Nav.Link>
            <Nav.Link><Button variant="outline-primary">Sign up</Button></Nav.Link>
          </Nav>
        </Container>
    </Navbar>
  );
};