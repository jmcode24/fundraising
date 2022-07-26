import React from "react";
import Header from "component/Header";
import { Helmet } from "react-helmet";
import Footer from "component/Footer";

function MainLayout(props) {
  return (
    <>
      <Helmet>
        <title>{props.pageTitle || "Fund Fair Ghana"}</title>
      </Helmet>

      <Header />

      <>{props.children}</>

      {/* <Footer /> */}
    </>
  );
}

export default MainLayout;
