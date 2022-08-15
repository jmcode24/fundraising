import Campaigns from "pages/Campaigns";
import Login from "pages/Login";
import Register from "pages/Register";
import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "layouts/MainLayout/MainLayout";
import ProtectedRoute from "component/ProtectedRoute";
import Create from "campaign/Create";
import MyCampaigns from "campaign/MyCampaigns";
import Details from "campaign/Details";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Campaigns />} />
          <Route exact path="my-campaigns" element={<MyCampaigns />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="campaigns" element={<MainLayout />}>
          <Route index element={<Campaigns />} />
          <Route path=":id" element={<Details />} />
          <Route exact path="create" element={<Create />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Router;
