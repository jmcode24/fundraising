import React from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";

function MainLayout(props) {
  return (
    <>
      <Helmet>
        <title>{props.pageTitle || "Fund Fair Ghana"}</title>
      </Helmet>

      <Container>{props.children}</Container>
    </>
  );
}

export default MainLayout;
