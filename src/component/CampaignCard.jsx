import React from "react";
import * as classes from "./CampaignCard.module.css";
import { Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Help from "images/help.jpeg";

function CampaignCard({ image, alt, children }) {
  return (
    <Col sm={12} md={6} lg={4} className="my-2">
      <Link
        to="/campaigns/123"
        style={{ textDecoration: "none" }}
        className="text-dark"
      >
        <Card
          style={{
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            maxWidth: "345px",
          }}
        >
          <Card.Img variant="top" src={Help} />
          <Card.Body>
            <Row>
              <Col lg="12">
                <Row>
                  <Col>
                    <p className="m-0">
                      Target:
                      <span className="text-muted"> $50,000</span>
                    </p>
                  </Col>
                  <Col style={{ justifyContent: "end", display: "flex" }}>
                    <span className="text-muted">$42,000</span>
                    <p>(82%)</p>
                  </Col>
                </Row>

                <p
                  style={{
                    background: "#00e472",
                    height: "7px",
                    borderRadius: "50px",
                  }}
                ></p>
              </Col>
            </Row>
            <Card.Text style={{ fontFamily: "Poppins" }}>
              Some quick example text to build on the card
            </Card.Text>
            <Button
              style={{
                backgroundColor: "#31bc2e",
                color: "#fff",
                outline: "none",
                fontSize: "14px",
                border: "none",
              }}
            >
              Donate now
            </Button>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

export default CampaignCard;

// <div className="card">
//   {image && (
//     <div className="card-image ">
//       <figure>
//         <img src={image} alt={alt} className="img-fluid" />
//       </figure>
//     </div>
//   )}

//   <div className="card-content">
//     <div className="content">{children}</div>
//   </div>
// </div>
