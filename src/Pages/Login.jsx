import React from "react";
import MainLayout from "layouts/MainLayout/MainLayout";
import { Container, Navbar, Nav, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <MainLayout pageTitle="Fund Fair Ghana | Log in">
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
            className="text-center mb-4"
            style={{
              fontSize: "2rem",
              fontFamily: "Poppins",
              fontWeight: "bold",
              color: "#00e472",
            }}
          >
            Sign in to continue
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button
              variant="outline-dark"
              type="submit"
              style={{
                width: "200px",
                padding: ".5rem 1rem",
              }}
            >
              Continue
            </Button>
          </Form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
