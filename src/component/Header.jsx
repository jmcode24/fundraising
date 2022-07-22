import React from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";

export default function Header({ pageTitle }) {
  return (
    <Container>
      <Helmet>
        <title>{pageTitle || "Charity Village"}</title>
      </Helmet>
      <h1>Header</h1>
    </Container>
  );
}
