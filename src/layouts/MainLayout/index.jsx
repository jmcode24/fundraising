import React from "react";
import { Container } from "react-bootstrap";
import Header from "component/Header";

function index({ children, pageTitle }) {
  return (
    <>
      <Header pageTitle={pageTitle}></Header>
      <Container>{children}</Container>
    </>
  );
}

export default index;
