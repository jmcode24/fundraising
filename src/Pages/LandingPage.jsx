import React from "react";
import {
  Button,
  Col,
  Container,
  Nav,
  Navbar,
  Row,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Help from "images/help.jpeg";

function LandingPage() {
  return (
    <div>
      <Navbar variant="light" bg="light">
        <Container>
          <Navbar.Brand>
            <h3 class="logo">FundFair</h3>
            {/* <Image logo={logo} /> */}
          </Navbar.Brand>
          <Nav className="mx-auto nav-item">
            <Nav.Link>
              <span
                className="text-info fw-bold"
                style={{ fontFamily: "poppins" }}
              >
                Explore
              </span>
            </Nav.Link>
            <Nav.Link>
              <span className="text-info fw-bold">How it works?</span>
            </Nav.Link>
            <Nav.Link>
              <span className="text-info fw-bold">About</span>
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto nav-item">
            <Link to="/login" style={{ color: "#444" }}>
              <Nav.Link>Log in</Nav.Link>
            </Link>

            <Nav.Link>
              <Button variant="outline-secondary">Sign up</Button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container
        fluid
        style={
          {
            // backgroundColor: "#F2B77D",
          }
        }
      >
        <Container
          style={{
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Row
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              padding: "3rem 0",
            }}
          >
            <Col sm={12} lg={7}>
              <h1
                style={{
                  fontSize: "4rem",
                  fontFamily: "Poppins",
                  // color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Let's Help those who are more in need.
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                omnis praesentium perferendis fugit ex provident deserunt
                asperiores nisi, exercitationem accusantium?
              </p>
              <Button
                style={{
                  backgroundColor: "#212529",
                  color: "#fff",
                  width: "200px",
                  outline: "none",
                  padding: ".8rem 1rem",
                  border: "none",
                }}
              >
                Start a Campaign
              </Button>
              <Button
                style={{
                  marginLeft: "1rem",
                  backgroundColor: "#fff",
                  color: "#212329",
                  width: "200px",
                  outline: "none",
                  padding: ".8rem 1rem",
                  border: "1px solid #212329",
                }}
              >
                Explore Campaigns
              </Button>
            </Col>

            <Col
              sm={12}
              lg={5}
              style={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <img
                className="img-fluid"
                src={Help}
                alt="help img"
                style={{
                  backgroundColor: "blue",
                  borderRadius: "50%",
                  width: "400px",
                  height: "400px",
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* How it works */}

      <Container
        fluid
        className=" text-white"
        style={{
          padding: "8rem 0",
          clipPath: "polygon(0 15%,100% 0,100% 100%,0 100%)",
          background: "linear-gradient(180deg,#212529,#212529 43.75%)",
        }}
      >
        <Container>
          <Row
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              padding: "3rem 0",
            }}
          >
            <Col sm={8} lg={7}>
              <h1
                style={{
                  fontSize: "3rem",
                  fontFamily: "Poppins",
                  // color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Fundraising on FundFair takes just a few clicks
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                omnis praesentium perferendis fugit ex provident deserunt
              </p>
            </Col>
          </Row>

          <Row
            style={{
              padding: "3rem 0",
            }}
          >
            <Col>
              <h1
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "Poppins",
                  // color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Start with the basics
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                omnis praesentium perferendis fugit ex provident deserunt
              </p>
            </Col>
            <Col>
              <h1
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "Poppins",
                  // color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Craft your story
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                omnis praesentium perferendis fugit ex provident deserunt
              </p>
            </Col>
            <Col>
              <h1
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                }}
              >
                Promote your Campaign
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                omnis praesentium perferendis fugit ex provident deserunt
              </p>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="py-5">
        <h1
          className="mb-3"
          style={{
            fontSize: "2rem",
            fontFamily: "Poppins",
            fontWeight: "bold",
          }}
        >
          Trending Campaigns
        </h1>
        <Row className="py-2">
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Help} />
              <Card.Body>
                <Row>
                  <Col
                    lg="3"
                    style={{
                      background: "black",
                      borderRadius: "5px",
                      width: "40px",
                      height: "40px",
                    }}
                  ></Col>
                  <Col lg="9">
                    <p className="m-0">
                      <span className="text-muted">$4,666</span>/$20,000
                    </p>
                    <p
                      className="m-0"
                      style={{
                        background: "black",
                        height: "7px",
                        borderRadius: "50px",
                      }}
                    ></p>
                  </Col>
                </Row>
                <Card.Text>
                  Some quick example text to build on the card
                </Card.Text>
                <Button
                  style={{
                    backgroundColor: "#212529",
                    color: "#fff",
                    outline: "none",
                    border: "none",
                  }}
                >
                  Donate now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
