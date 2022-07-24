import { Helmet } from "react-helmet";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Helmet>
        <title>Register</title>
      </Helmet>

      <div
        style={{
          width: "400px",
        }}
      >
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

          <p>
            already have an account? <Link to="/login">Login</Link>
          </p>
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
  );
};

export default Register;
