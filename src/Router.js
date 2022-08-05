import LandingPage from "pages/LandingPage";
import Campaigns from "pages/Campaigns";
import CampaignDetails from "pages/CampaignDetails";
import Login from "pages/Login";
import Register from "pages/Register";
import React from "react";
import { Routes, Route } from "react-router-dom";
import ProfileLayout from "layouts/ProfileLayout/ProfileLayout";
import ProfilePage from "pages/ProfilePage";
import DashboardCampaigns from "pages/DashboardCampaigns";
import DashboardDonations from "pages/DashboardDonations";
import DashboardAnalytics from "pages/DashboardAnalytics";
import MainLayout from "layouts/MainLayout/MainLayout";
import CreateCampaign from "pages/CreateCampaign";
import EditCampaign from "pages/EditCampaign";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="campaigns" element={<MainLayout />}>
          <Route index element={<Campaigns />} />
          {/* <Route path="create" element={<CreateCampaign />} />
          <Route path=":id/edit" element={<EditCampaign />} /> */}
          <Route path=":id" element={<CampaignDetails />} />
        </Route>

        <Route path="profile" element={<ProfileLayout />}>
          <Route exact path="campaigns" element={<DashboardCampaigns />} />
          <Route exact path="campaigns/create" element={<CreateCampaign />} />
          <Route exact path="campaigns/:id/edit" element={<EditCampaign />} />
          <Route exact path="donations" element={<DashboardDonations />} />
          <Route exact path="analytics" element={<DashboardAnalytics />} />
          <Route exact index element={<ProfilePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Router;
