import React, { useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaSeedling } from "react-icons/fa";
import ProfileImage from "images/profile.jpg";

export default function Header() {
  const [user, setUser] = useState(true);
  let location = useLocation();

  return (
    <Navbar
      variant="light"
      bg="#fff"
      collapseOnSelect
      expand="lg"
      style={{
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        background: location.pathname === "/" ? "#e0ffd6" : "#fff",
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
            style={{
              fonStyle: "normal",
              fontFamily: "poppins",
            }}
            activeKey={location.pathname}
          >
            <Nav.Link
              eventKey={1}
              as={Link}
              to="/campaigns"
              style={{ color: "#004c46" }}
            >
              Explore
            </Nav.Link>

            <Nav.Link
              eventKey={2}
              as={Link}
              to="/#how-it-works"
              style={{ color: "#004c46" }}
            >
              How it works?
            </Nav.Link>
            <Nav.Link
              eventKey={3}
              as={Link}
              to="/#about"
              style={{ color: "#004c46" }}
            >
              About
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto nav-item" activeKey={location.pathname}>
            {user ? (
              <>
                <Nav.Link
                  as={Link}
                  eventKey={4}
                  to="/profile"
                  className="d-flex align-items-center text-decoration-none"
                >
                  <div>
                    <p className="m-0 text-dark">Jane Doe</p>
                  </div>
                  <img
                    src={ProfileImage}
                    alt="profile"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "#f1f1f1",
                      marginLeft: "10px",
                      fontSize: "14px",
                      overflow: "hidden",
                    }}
                  />
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link eventKey={5} as={Link} to="/login">
                  <Button
                    style={{
                      backgroundColor: "transparent",
                      color: "#004c46",
                      minWidth: "130px",
                      outline: "none",
                      border: "1px solid #004c46",
                    }}
                  >
                    Log in
                  </Button>
                </Nav.Link>

                <Nav.Link eventKey={6} as={Link} to="/register">
                  <Button
                    style={{
                      backgroundColor: "#004c46",
                      color: "#fff",
                      minWidth: "130px",
                      outline: "none",
                      border: "none",
                    }}
                  >
                    Sign up
                  </Button>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
