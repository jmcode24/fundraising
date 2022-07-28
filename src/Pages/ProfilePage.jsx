import React from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import Help from "images/help.jpeg";

const ProfilePage = () => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <div style={{ flex: 1 }}>
          <h4>Campaign</h4>
          <p>Let's create you first campaign</p>
        </div>
        <div>
          <Button
            style={{
              maxWidth: "200px",
              outline: "none",
              background: "#00e472",
              border: "none",
              display: "inline-block",
            }}
          >
            + creat campaign
          </Button>
        </div>
      </div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Campaign</th>
            <th>Created at</th>
            <th>Target</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Car accident at Adenta</td>
            <td>24th June, 2022</td>
            <td>$18,455 / $35,000</td>
            <td>success</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Car accident at Adenta</td>
            <td>24th June, 2022</td>
            <td>$18,455 / $35,000</td>
            <td>success</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Car accident at Adenta</td>
            <td>24th June, 2022</td>
            <td>$18,455 / $35,000</td>
            <td>pending</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Car accident at Adenta</td>
            <td>24th June, 2022</td>
            <td>$18,455 / $35,000</td>
            <td>success</td>
          </tr>
        </tbody>
      </Table>

      <div style={{ padding: "20px 0" }}>
        <h4>Recent Campaigns</h4>
        <p>History of your recent campaigns</p>

        <Row>
          <Col
            sm={12}
            md={6}
            lg={4}
            style={{
              border: "1px solid #f1f1f1",
              padding: "0px",
              margin: "10px",
              maxWidth: "300px",
            }}
          >
            <img src={Help} alt="test" className="img-fluid" />

            <div className="p-2">
              <h2>Food in Indonisia</h2>
              <p className="text-muted">
                History of your recent campaigns History of your recent
                campaigns History of
              </p>
              <Button
                style={{
                  maxWidth: "200px",
                  outline: "none",
                  background: "#00e472",
                  border: "none",
                  display: "inline-block",
                }}
              >
                Check it Now
              </Button>
            </div>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={4}
            style={{
              border: "1px solid #f1f1f1",
              padding: "0px",
              margin: "10px",
              maxWidth: "300px",
            }}
          >
            <img src={Help} alt="test" className="img-fluid" />

            <div className="p-2">
              <h2>Food in Indonisia</h2>
              <p className="text-muted">
                History of your recent campaigns History of your recent
                campaigns History of
              </p>
              <Button
                style={{
                  maxWidth: "200px",
                  outline: "none",
                  background: "#00e472",
                  border: "none",
                  display: "inline-block",
                }}
              >
                Check it Now
              </Button>
            </div>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={4}
            style={{
              border: "1px solid #f1f1f1",
              padding: "0px",
              margin: "10px",
              maxWidth: "300px",
            }}
          >
            <img src={Help} alt="test" className="img-fluid" />

            <div className="p-2">
              <h2>Food in Indonisia</h2>
              <p className="text-muted">
                History of your recent campaigns History of your recent
                campaigns History of
              </p>
              <Button
                style={{
                  maxWidth: "200px",
                  outline: "none",
                  background: "#00e472",
                  border: "none",
                  display: "inline-block",
                }}
              >
                Check it Now
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProfilePage;
