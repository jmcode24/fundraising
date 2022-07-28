import LandingPage from "pages/LandingPage";
import Campaigns from "pages/Campaigns";
import CampaignDetails from "pages/CampaignDetails";
import Login from "pages/Login";
import Register from "pages/Register";
import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import ProfileLayout from "layouts/ProfileLayout/ProfileLayout";
import ProfilePage from "pages/ProfilePage";
import DashboardCampaigns from "pages/DashboardCampaigns";
import DashboardDonations from "pages/DashboardDonations";
import DashboardAnalytics from "pages/DashboardAnalytics";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route index element={<LandingPage />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="campaigns/:id" element={<CampaignDetails />} />
        <Route path="campaigns" element={<Campaigns />} />

        <Route path="/profile" element={<ProfileLayout />}>
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

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="invoices">Invoices</Link> <Link to="team">Team</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function Invoices() {
  return <h1>Invoices</h1>;
}

function Team() {
  return <h1>Team</h1>;
}
