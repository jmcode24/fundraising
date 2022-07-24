import { Button, Form } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Login = () => {
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
        <title>Login</title>
      </Helmet>

      <div
        style={{
          width: "400px",
        }}
      >
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <p>
            don't have an account? <Link to="/register">Regiter</Link>
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

export default Login;
