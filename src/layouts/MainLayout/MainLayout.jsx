import React from "react";
import { Container } from "react-bootstrap";
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

      <Container>{props.children}</Container>

      <Footer />
    </>
  );
}

export default MainLayout;
