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
          <Route path=":id" element={<CampaignDetails />} />
        </Route>

        <Route path="profile" element={<ProfileLayout />}>
          <Route path="campaigns" element={<DashboardCampaigns />} />
          <Route path="donations" element={<DashboardDonations />} />
          <Route path="analytics" element={<DashboardAnalytics />} />
          <Route index element={<ProfilePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Router;
