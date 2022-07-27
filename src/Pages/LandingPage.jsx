import React from "react";
import { Button, Col, Container, Row, Image } from "react-bootstrap";
import MainLayout from "layouts/MainLayout/MainLayout";
import CampaignCard from "component/CampaignCard";

import Help from "images/help.jpeg";
import Coinbase from "images/coinbase.png";
import Paypal from "images/paypal.png";
import Vodafone from "images/vodafone.png";
import Stripe from "images/stripelogo.png";
import Airtel from "images/airtel.png";

function LandingPage() {
  return (
    <MainLayout pageTitle="FundFair Ghana">
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
                  color: "#004c46",
                }}
              >
                Connecting issues that matter with people who care
              </h1>
              <p className="text-muted">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                omnis praesentium perferendis fugit ex provident deserunt
                asperiores nisi, exercitationem accusantium?
              </p>
              <Button
                style={{
                  // backgroundColor: "#212529",
                  backgroundColor: "#31bc2e",
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
                  border: "2px solid #31bc2e",
                }}
              >
                Explore Campaigns
              </Button>
            </Col>

            <Col sm={12} lg={5}>
              <Image
                className="img-fluid"
                fluid
                src={Help}
                alt="help img"
                style={{ width: "100%" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* How it works */}
      <Container
        id="how-it-works"
        fluid
        className=" text-white"
        style={{
          padding: "8rem 0",
          clipPath: "polygon(0 15%,100% 0,100% 100%,0 100%)",
          background: "linear-gradient(180deg,#004c46,#004c46 43.75%)",
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
                01
              </div>
              <h1
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "Poppins",
                  color: "#00e472",
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
                02
              </div>
              <h1
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "Poppins",
                  color: "#00e472",
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
                03
              </div>

              <h1
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  color: "#00e472",
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
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
        </Row>
      </Container>

      {/* Get Started Area */}
      <Container
        fluid
        style={{ backgroundColor: "#004c46", color: "#fff" }}
        id="about"
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
                  fontSize: "3.5rem",
                  fontFamily: "Poppins",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Get started with FundFair
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

      {/* Trusted Area */}
      <Container fluid className="py-5" style={{ background: "#f1f1f1" }}>
        <Container>
          <h1
            style={{
              fontSize: "3rem",
              fontFamily: "Poppins",
              color: "#004c46",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Trusted Partners
          </h1>

          <Row className="justify-content-center">
            <Col
              sm={12}
              md={6}
              lg={2}
              style={{ justifyContent: "center", display: "flex" }}
            >
              <Image fluid style={{ width: "200px" }} src={Coinbase} />
            </Col>
            <Col
              sm={12}
              md={6}
              lg={2}
              style={{ justifyContent: "center", display: "flex" }}
            >
              <Image fluid style={{ width: "200px" }} src={Stripe} />
            </Col>
            <Col
              sm={12}
              md={6}
              lg={2}
              style={{ justifyContent: "center", display: "flex" }}
            >
              <Image fluid style={{ width: "200px" }} src={Vodafone} />
            </Col>
            <Col
              sm={12}
              md={6}
              lg={2}
              style={{ justifyContent: "center", display: "flex" }}
            >
              <Image fluid style={{ width: "200px" }} src={Airtel} />
            </Col>
            <Col
              sm={12}
              md={6}
              lg={2}
              style={{ justifyContent: "center", display: "flex" }}
            >
              <Image fluid style={{ width: "200px" }} src={Paypal} />
            </Col>
          </Row>
        </Container>
      </Container>
    </MainLayout>
  );
}

export default LandingPage;
