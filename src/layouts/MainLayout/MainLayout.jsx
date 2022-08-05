import React from "react";
import Header from "component/Header";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import Footer from "component/Footer";

function MainLayout(props) {
  console.log(props);
  return (
    <>
      <Helmet>
        <title>{props.pageTitle || "FundFair Ghana"}</title>
      </Helmet>

      <Header />

      <div style={{ minHeight: "70vh" }}>
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default MainLayout;
