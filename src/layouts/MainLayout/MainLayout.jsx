import React from "react";
import Header from "component/Header";
import { Helmet } from "react-helmet";

function MainLayout(props) {
  return (
    <>
      <Helmet>
        <title>{props.pageTitle || "FundFair Ghana"}</title>
      </Helmet>

      <Header />

      <>{props.children}</>

      {/* <Footer /> */}
    </>
  );
}

export default MainLayout;
