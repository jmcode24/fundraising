import React from "react";
import { Container } from "react-bootstrap";
import Header from "component/Header";
import { Helmet } from "react-helmet";

function MainLayout(props) {
  return (
    <>
      <Helmet>
        <title>{props.pageTitle || "Charity Village"}</title>
      </Helmet>

      <Header />

      <Container>{props.children}</Container>
    </>
  );
}

export default MainLayout;
