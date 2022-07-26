import React from "react";
import MainLayout from "layouts/MainLayout/MainLayout";
import { Container, Navbar, Nav, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <MainLayout pageTitle="Fund Fair Ghana | Sign up">
      <div
        className="mt-4"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "400px",
          }}
        >
          <p
            className="text-center mb-1"
            style={{
              fontSize: "2rem",
              fontFamily: "Poppins",
              fontWeight: "bold",
              color: "#00e472",
            }}
          >
            Sign up
          </p>
          <p
            className="text-center mb-4 text-muted"
            style={{ fontSize: "1.5rem", fontFamily: "Poppins" }}
          >
            it's quick and easy.
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="fullname">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter full name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="Enter phone" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button
              type="submit"
              style={{
                backgroundColor: "#212529",
                color: "#fff",
                width: "200px",
                outline: "none",
                padding: ".5rem 1rem",
                border: "none",
              }}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
