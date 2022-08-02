import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { FaSeedling } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import SideBar from "component/SideBar";
import ProfileImage from "images/profile.jpg";

function ProfileLayout(props) {
  return (
    <>
      <Helmet>
        <title>{props.pageTitle || "Profile"}</title>
      </Helmet>

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
          <Col sm={12} md={10} className="p-0 " style={{ marginLeft: "auto" }}>
            <Row>
              <Col sm={12} md={9}>
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
                md={3}
                style={{
                  borderLeft: "2px solid #f1f1f1",
                  background: "#fff",
                  minHeight: "100vh",
                }}
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
