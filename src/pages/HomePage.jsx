import MainLayout from "layouts/MainLayout/MainLayout";
import React from "react";
import {
  Container,
  InputGroup,
  Form,
  DropdownButton,
  Dropdown,
  Row,
  Col,
} from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";

export default function HomePage() {
  return (
    <MainLayout pageTitle="Fund Fair Ghana">
      {/* Page details*/}
      <Container>
        {/* Search bar*/}
        <InputGroup className="mb-3 mt-4">
          <InputGroup.Text id="basic-addon1">
            <AiOutlineSearch />
          </InputGroup.Text>
          <Form.Control placeholder="search project" />
          <DropdownButton
            variant="outline-secondary"
            title="Category"
            id="input-group-dropdown-2"
            align="end"
          >
            <Dropdown.Item href="#">Court Fines</Dropdown.Item>
            <Dropdown.Item href="#">Education</Dropdown.Item>
            <Dropdown.Item href="#">Medical & Health</Dropdown.Item>
            <Dropdown.Item href="#">Kids & Family</Dropdown.Item>
            <Dropdown.Item href="#">Disaster Relief</Dropdown.Item>
          </DropdownButton>
        </InputGroup>

        {/* Intro */}
        <Row>
          <Col md="8"></Col>
          <Col md="4"></Col>
        </Row>
      </Container>
    </MainLayout>
  );
}
