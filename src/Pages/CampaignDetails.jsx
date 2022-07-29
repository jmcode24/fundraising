import { Button, Col, Container, Row } from "react-bootstrap";
import Help from "images/help.jpeg";
import ProfileImage from "images/profile.jpg";
import { BsFillTagFill } from "react-icons/bs";

const CampaignDetails = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-between py-4">
          <Col
            sm={12}
            md={4}
            style={{
              padding: "20px",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          >
            <h4>Donation info & status</h4>
          </Col>
          <Col sm={12} md={7}>
            <img
              src={Help}
              alt="banner"
              style={{ height: "350px", width: "100%", borderRadius: "10px" }}
            />

            <div
              className="mt-3 d-flex justify-content-between align-items-center"
              style={{ borderBottom: "1px solid #f1f1f1" }}
            >
              <div className="my-3 d-flex align-items-center">
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
                </div>
              </div>

              <div>
                <p className="m-0">created on may 24th, 2015</p>
                <p className="m-0">
                  <BsFillTagFill /> Family
                </p>
              </div>
            </div>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              sapiente a, exercitationem incidunt voluptatum molestiae obcaecati
              perferendis. Quidem voluptatum facere explicabo nostrum? A ipsam
              nisi dolorum delectus consequatur rerum numquam. Nam eum illum
              provident quod omnis eos totam ipsa at tempore! Reiciendis
              cupiditate debitis nam adipisci soluta a quas optio, quasi
              quisquam, in qui perferendis praesentium odio alias dignissimos
              nihil?
            </p>

            <div className="d-flex justify-content-between">
              <Button
                style={{
                  backgroundColor: "#004c46",
                  color: "#fff",
                  width: "45%",
                  outline: "none",
                  padding: ".8rem 1rem",
                  border: "none",
                }}
              >
                Donate
              </Button>
              <Button
                style={{
                  backgroundColor: "#fff",
                  color: "#004c46",
                  width: "45%",
                  outline: "none",
                  padding: ".8rem 1rem",
                  border: "1px solid #004c46",
                  marginLeft: "10px",
                }}
              >
                Share
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CampaignDetails;
