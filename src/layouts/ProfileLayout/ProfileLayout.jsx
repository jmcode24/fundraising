import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { AiOutlineHome } from "react-icons/ai";
import { RiBarChartFill } from "react-icons/ri";
import { FaRegCompass, FaSeedling } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";
import SideBar from "component/SideBar";

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
          <Col sm={12} md={7} className="p-0">
            <div
              style={{
                color: "#004c46",
                fontWeight: "bold",
                textDecoration: "none",
                borderBottom: "2px solid #f1f1f1",
                height: "60px",
              }}
              className="p-2 d-flex align-items-center"
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
              height: "100vh",
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
                ></div>
                <div>
                  <p className="m-0 text-dark">Jane Doe</p>
                  <p className="m-0 text-muted">jane@gmail.com</p>
                </div>
              </div>

              <div className="mt-4">
                <p className="m-0">Total Campaigns</p>
                <h2>40</h2>
              </div>

              <div className="mt-3">
                <p className="m-0">Total Donations Received</p>
                <h2>$25,000</h2>
              </div>

              <div className="mt-3 ">
                <p className="m-0">Total Donations Made</p>
                <h2>$490</h2>
              </div>

              <div className="mt-3 ">
                <p className="m-0">History Donations</p>

                <div className="mt-3 d-flex align-items-center">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "#f1f1f1",
                      marginRight: "10px",
                      fontSize: "14px",
                    }}
                  ></div>
                  <div>
                    <p className="m-0 text-dark">Jane Doe</p>
                    <p className="m-0 text-muted">jane@gmail.com</p>
                  </div>
                </div>

                <div className="mt-3 d-flex align-items-center">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "#f1f1f1",
                      marginRight: "10px",
                      fontSize: "14px",
                    }}
                  ></div>
                  <div>
                    <p className="m-0 text-dark">Jane Doe</p>
                    <p className="m-0 text-muted">jane@gmail.com</p>
                  </div>
                </div>

                <div className="mt-3 d-flex align-items-center">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "#f1f1f1",
                      marginRight: "10px",
                      fontSize: "14px",
                    }}
                  ></div>
                  <div>
                    <p className="m-0 text-dark">Jane Doe</p>
                    <p className="m-0 text-muted">jane@gmail.com</p>
                  </div>
                </div>

                <div className="mt-3 d-flex align-items-center">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "#f1f1f1",
                      marginRight: "10px",
                      fontSize: "14px",
                    }}
                  ></div>
                  <div>
                    <p className="m-0 text-dark">Jane Doe</p>
                    <p className="m-0 text-muted">jane@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProfileLayout;
