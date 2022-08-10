import { Row } from "react-bootstrap";
import CampaignCard from "component/CampaignCard";

const DashboardCampaign = () => {
  return (
    <div>
      <h4 style={{ color: "#004c46" }}>Campaigns </h4>
      <Row className="py-2">
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
      </Row>
    </div>
  );
};

export default DashboardCampaign;
