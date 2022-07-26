import MainLayout from "layouts/MainLayout/MainLayout";
import { Container, Row, Col, Button } from "react-bootstrap";
import CampaignCard from "component/CampaignCard";
import Help from "images/help.jpeg";

const Campaigns = () => {
  return (
    <MainLayout pageTitle="Campaigns">
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
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Campaigns;
