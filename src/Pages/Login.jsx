import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div pageTitle="Fund Fair Ghana | Log in">
      <Container
        className="py-5"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
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
              color: "#004c46",
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
              Login
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
