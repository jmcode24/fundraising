import { Col, Container, Row } from "react-bootstrap";
import Help from "images/help.jpeg";

const CampaignDetails = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-between pt-4">
          <Col sm={12} md={4}>
            <h4>Donation info & status</h4>
          </Col>
          <Col sm={12} md={7}>
            <img
              src={Help}
              alt="banner"
              style={{ height: "350px", width: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CampaignDetails;
