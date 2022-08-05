import React, { useState } from "react";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { FaSeedling } from "react-icons/fa";
import { Link, Outlet, useLocation } from "react-router-dom";
import SideBar from "component/SideBar";
import ProfileImage from "images/profile.jpg";
import Header from "component/Header";

function ProfileLayout(props) {
  const [user, setUser] = useState(true);
  let location = useLocation();

  return (
    <>
      <Helmet>
        <title>{props.pageTitle || "Profile"}</title>
      </Helmet>

      <Navbar
        variant="light"
        bg="#fff"
        expand={"lg"}
        collapseOnSelect
        fixed="top"
        style={{
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          background: location.pathname === "/" ? "#e0ffd6" : "#fff",
        }}
        className="d-lg-none "
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
              className="mx-auto "
              style={{
                fonStyle: "normal",
                fontFamily: "poppins",
              }}
              // activeKey={location.pathname}
            >
              <Nav.Link as={Link} to="/profile" style={{ color: "#004c46" }}>
                Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to="campaigns" style={{ color: "#004c46" }}>
                Campaigns
              </Nav.Link>

              <Nav.Link as={Link} to="donations" style={{ color: "#004c46" }}>
                Donations
              </Nav.Link>
              <Nav.Link as={Link} to="analytics" style={{ color: "#004c46" }}>
                Analytics
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto nav-item" activeKey={location.pathname}>
              {user ? (
                <>
                  <Link
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
                  </Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">
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

                  <Nav.Link as={Link} to="/register">
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

      <Container fluid>
        <Row>
          <Col
            sm={12}
            md={2}
            style={{
              borderRight: "2px solid #f1f1f1",
              height: "100vh",
              padding: 0,
              // width: "100%",
              position: "fixed",
            }}
            className="d-none d-lg-block"
          >
            <Nav.Link
              as={Link}
              to="/"
              style={{
                color: "#004c46",
                fontWeight: "bold",
                textDecoration: "none",
                borderBottom: "2px solid #f1f1f1",
                height: "60px",
              }}
              className="d-flex align-items-center"
            >
              <FaSeedling style={{ fontSize: "2rem" }} />
              <h4 className="m-0">FundFair</h4>
            </Nav.Link>

            <SideBar />
          </Col>

          {/* Main Content */}
          <Col
            sm={12}
            lg={10}
            // lg="auto"
            className="p-0 ms-lg-auto"
            // style={{ marginLeft: "auto" }}
          >
            <Row>
              <Col sm={12} lg={9}>
                <div
                  style={{
                    color: "#004c46",
                    fontWeight: "bold",
                    textDecoration: "none",
                    borderBottom: "2px solid #f1f1f1",
                    height: "60px",
                  }}
                  className="p-3 m-0 d-flex align-items-center"
                >
                  <p className="m-0">Search</p>
                </div>

                <div className="p-3">
                  <Outlet />
                </div>
              </Col>

              <Col
                sm={12}
                lg={3}
                style={{
                  borderLeft: "2px solid #f1f1f1",
                  background: "#fff",
                  minHeight: "100vh",
                }}
                // className="p-3 bg-light"
                className="d-none d-lg-block"
              >
                <div style={{ padding: "20px 0" }}>
                  <p> Account</p>
                  <div className="d-flex align-items-center">
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        background: "#f1f1f1",
                        marginRight: "10px",
                      }}
                    >
                      <img
                        src={ProfileImage}
                        alt="profile"
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          background: "#f1f1f1",
                          marginRight: "10px",
                          fontSize: "14px",
                          overflow: "hidden",
                        }}
                      />
                    </div>
                    <div>
                      <p className="m-0 text-dark">Jane Doe</p>
                      <p className="m-0 text-muted">jane@gmail.com</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="m-0">Total Campaigns</p>
                    <h4>40</h4>
                  </div>

                  <div className="mt-3">
                    <p className="m-0">Total Donations Received</p>
                    <h4>$25,000</h4>
                  </div>

                  <div className="mt-3 ">
                    <p className="m-0">Total Donations Made</p>
                    <h4>$490</h4>
                  </div>

                  <div className="mt-3 ">
                    <p className="m-0">History Donations</p>

                    <div className="mt-3 d-flex align-items-center">
                      <img
                        src={ProfileImage}
                        alt="profile"
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                          background: "#f1f1f1",
                          marginRight: "10px",
                          fontSize: "14px",
                          overflow: "hidden",
                        }}
                      />

                      <div>
                        <p className="m-0 text-dark">Jane Doe</p>
                        <p className="m-0 text-muted">jane@gmail.com</p>
                      </div>
                    </div>

                    <div className="mt-3 d-flex align-items-center">
                      <img
                        src={ProfileImage}
                        alt="profile"
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                          background: "#f1f1f1",
                          marginRight: "10px",
                          fontSize: "14px",
                          overflow: "hidden",
                        }}
                      />

                      <div>
                        <p className="m-0 text-dark">Jane Doe</p>
                        <p className="m-0 text-muted">jane@gmail.com</p>
                      </div>
                    </div>

                    <div className="mt-3 d-flex align-items-center">
                      <img
                        src={ProfileImage}
                        alt="profile"
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                          background: "#f1f1f1",
                          marginRight: "10px",
                          fontSize: "14px",
                          overflow: "hidden",
                        }}
                      />

                      <div>
                        <p className="m-0 text-dark">Jane Doe</p>
                        <p className="m-0 text-muted">jane@gmail.com</p>
                      </div>
                    </div>

                    <div className="mt-3 d-flex align-items-center">
                      <img
                        src={ProfileImage}
                        alt="profile"
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                          background: "#f1f1f1",
                          marginRight: "10px",
                          fontSize: "14px",
                          overflow: "hidden",
                        }}
                      />

                      <div>
                        <p className="m-0 text-dark">Jane Doe</p>
                        <p className="m-0 text-muted">jane@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProfileLayout;
