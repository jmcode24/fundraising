import { Col, Container, Row } from "react-bootstrap";
import MainLayout from "layouts/MainLayout/MainLayout";

const CampaignDetails = () => {
  return (
    <MainLayout>
      <Container>
        <h1 style={{ color: "#004c46" }}>Campaign details</h1>
        <Row>
          <Col sm={12} md={4}>
            <h1>filter campaigns</h1>
          </Col>
          <Col sm={12} md={8}>
            <h1>campaigns content</h1>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default CampaignDetails;
