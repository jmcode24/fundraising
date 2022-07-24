import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import Image from "./Image";
import logo from "../images/logo.png";
<<<<<<< HEAD
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar variant="light" bg="light" className="py-3">
      <Container>
        <Navbar.Brand>
          <h1 class="logo">FundFair</h1>
          {/* <Image logo={logo} /> */}
=======
import '../index.css';

export default function Header() {
  return (
    <Navbar fixed="top" variant="light" bg="dark" className="py-3">
      <Container>
        <Navbar.Brand href="#home">
          <Image pic={logo} />
>>>>>>> 02d9e3f09165790a9685d70b48824554bb654abc
        </Navbar.Brand>
        <Nav className="mx-auto nav-item">
          <Nav.Link href="#explore" activeKey="active">
            <span className="text-info fw-bold">Explore</span>
          </Nav.Link>
          <Nav.Link href="#works" activeKey="active">
            <span className="text-info fw-bold">How it works?</span>
          </Nav.Link>
          <Nav.Link href="#about" activeKey="active">
            <span className="text-info fw-bold">About</span>
          </Nav.Link>
        </Nav>
        <Nav className="ms-auto nav-item">
          <Nav.Link>
            <Button variant="outline-success">
              <Link to="/login">Log in</Link>
            </Button>
          </Nav.Link>
          <Nav.Link>
            <Button variant="outline-primary">Sign up</Button>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
