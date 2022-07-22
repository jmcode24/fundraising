import React from "react";
import { Container } from "react-bootstrap";
import Header from "component/Header";

function MainLayout({ children, pageTitle }) {
  return (
    <>
      <Header pageTitle={pageTitle} />
      <Container>{children}</Container>
    </>
  );
}

export default MainLayout;
