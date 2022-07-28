import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { FaSeedling } from "react-icons/fa";

export default function Header() {
  return (
    <Navbar
      variant="light"
      bg="#fff"
      collapseOnSelect
      expand="lg"
      style={{
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
    >
      <Container>
        <Navbar.Brand>
          <Link
            to="/"
            className="logo d-flex align-items-center"
            style={{
              color: "#004c46",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            <FaSeedling style={{ fontSize: "2rem" }} />
            <h4 className="m-0">FundFair</h4>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="mx-auto nav-item"
            style={{ fonStyle: "normal", fontFamily: "poppins" }}
          >
            <LinkContainer to="/campaigns">
              <Nav.Link>Explore</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to="/#how-it-works"> */}
            <Nav.Link href="/#how-it-works">How it works?</Nav.Link>
            {/* </LinkContainer> */}
            {/* <LinkContainer to="/#about"> */}
            <Nav.Link href="/#about">About</Nav.Link>
            {/* </LinkContainer> */}
          </Nav>
          <Nav className="ms-auto nav-item">
            <LinkContainer to="/login">
              <Nav.Link>
                <Button
                  style={{
                    backgroundColor: "#fff",
                    color: "#212329",
                    minWidth: "130px",
                    outline: "none",
                    border: "1px solid #31bc2e",
                  }}
                >
                  Log in
                </Button>
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/register">
              <Nav.Link>
                <Button
                  style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    minWidth: "130px",
                    outline: "none",
                    border: "none",
                  }}
                >
                  Sign up
                </Button>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
