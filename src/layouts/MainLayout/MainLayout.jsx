import React from "react";
import Header from "component/Header";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";

function MainLayout(props) {
  return (
    <>
      <Helmet>
        <title>{props.pageTitle || "FundFair Ghana"}</title>
      </Helmet>

      <Header />

      <>
        <Outlet />
      </>

      {/* <Footer /> */}
    </>
  );
}

export default MainLayout;
