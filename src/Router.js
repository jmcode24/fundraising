import HomePage from "pages/HomePage";
import LandingPage from "pages/LandingPage";
import Campaigns from "pages/Campaigns";
import CampaignDetails from "pages/CampaignDetails";
import Login from "pages/Login";
import Register from "pages/Register";
import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="campaigns" element={<Campaigns />}>
          <Route path=":id" element={<CampaignDetails />} />
          <Route index element={<Campaigns />} />
        </Route>
        {/* <Route path="campaign/:id" element={<CampaignDetails />} /> */}

        <Route path="dashboard" element={<Dashboard />}>
          <Route path="invoices" element={<Invoices />} />
          <Route path="team" element={<Team />} />
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
