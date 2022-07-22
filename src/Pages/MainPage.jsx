import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Helmet } from "react-helmet";

export default function MainPage() {
  return (
    <>
      <Helmet>
        <title>Charity Village Ghana</title>
      </Helmet>

      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <h1>HomePage</h1>
      </Container>
    </>
  );
}
