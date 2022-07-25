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
      <Navbar variant="light" bg="#fff" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand>
            <h3 class="logo">FundFair</h3>
            {/* <Image logo={logo} /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto nav-item">
              <Nav.Link>
                <span className="text-dark" style={{ fontFamily: "poppins" }}>
                  Explore
                </span>
              </Nav.Link>
              <Nav.Link>
                <span className="text-dark">How it works?</span>
              </Nav.Link>
              <Nav.Link>
                <span className="text-dark">About</span>
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto nav-item">
              <Link to="/login" style={{ color: "#444" }}>
                <Nav.Link>
                  <Button
                    style={{
                      backgroundColor: "#fff",
                      color: "#212329",
                      minWidth: "130px",
                      outline: "none",
                      border: "1px solid #212329",
                    }}
                  >
                    Log in
                  </Button>
                </Nav.Link>
              </Link>

              <Nav.Link>
                <Button
                  style={{
                    backgroundColor: "#212529",
                    color: "#fff",
                    minWidth: "130px",
                    outline: "none",
                    border: "none",
                  }}
                >
                  Sign up
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid>
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
                  fontSize: "3rem",
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                }}
              >
                Connecting issues that matter with people who care
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
              <img className="img-fluid" src={Help} alt="help img" />
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
          background: "linear-gradient(180deg,#02090f,#02090f 43.75%)",
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
                  fontWeight: "bold",
                  paddingTop: "3rem",
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
              textAlign: "center",
            }}
          >
            <Col sm={12} md={4}>
              <div
                style={{
                  background: "#00e472",
                  borderRadius: "999px",
                  color: "#fff",
                  display: "block",
                  fontFamily: "Poppins,sans-serif",
                  fontSize: "18px",
                  fontWeight: "bold",
                  height: "50px",
                  lineHeight: "50px",
                  margin: "auto",
                  marginBottom: "20px",
                  textAlign: "center",
                  width: "50px",
                }}
              >
                1
              </div>
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

            <Col sm={12} md={4}>
              <div
                style={{
                  background: "#00e472",
                  borderRadius: "999px",
                  color: "#fff",
                  display: "block",
                  fontFamily: "Poppins,sans-serif",
                  fontSize: "18px",
                  fontWeight: "bold",
                  height: "50px",
                  lineHeight: "50px",
                  margin: "auto",
                  marginBottom: "20px",
                  textAlign: "center",
                  width: "50px",
                }}
              >
                2
              </div>
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

            <Col sm={12} md={4}>
              <div
                style={{
                  background: "#00e472",
                  borderRadius: "999px",
                  color: "#fff",
                  display: "block",
                  fontFamily: "Poppins,sans-serif",
                  fontSize: "18px",
                  fontWeight: "bold",
                  height: "50px",
                  lineHeight: "50px",
                  margin: "auto",
                  marginBottom: "20px",
                  textAlign: "center",
                  width: "50px",
                }}
              >
                3
              </div>

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
            <Card
              style={{
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                maxWidth: "345px",
              }}
            >
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
          <Col>
            <Card
              style={{
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                maxWidth: "345px",
              }}
            >
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
          <Col>
            <Card
              style={{
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                maxWidth: "345px",
              }}
            >
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

      {/* Get Started Area */}
      <Container fluid style={{ backgroundColor: "#02090f", color: "#fff" }}>
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
                  fontSize: "4.5rem",
                  fontFamily: "Poppins",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Get started with FundFair.
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                omnis praesentium perferendis fugit ex provident deserunt
                asperiores nisi, exercitationem accusantium?
              </p>
              <Button
                style={{
                  backgroundColor: "#00e472",
                  color: "#fff",
                  width: "200px",
                  outline: "none",
                  padding: ".8rem 1rem",
                  border: "none",
                }}
              >
                Register
              </Button>
              <Button
                style={{
                  marginLeft: "1rem",
                  backgroundColor: "transparent",
                  color: "#00e472",
                  width: "200px",
                  outline: "none",
                  padding: ".8rem 1rem",
                  // border: "1px solid #212329",
                  border: "1px solid #00e472",
                }}
              >
                Login
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default LandingPage;
