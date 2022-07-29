import React from "react";
import { Nav, NavItem } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegCompass } from "react-icons/fa";
import { RiBarChartFill, RiSendPlaneFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  let location = useLocation();
  console.log(location);

  return (
    <Nav
      className="flex-direction-column p-0 mx-0 mt-1 "
      activeKey={location.pathname}
    >
      {/* <Nav.Link
        as={Link}
        to="/"
        style={{
          color: "#004c46",
          fontWeight: "bold",
          textDecoration: "none",
          borderBottom: "2px solid #f1f1f1",
          height: "60px",
        }}
        className="d-flex align-items-center justify-content-between w-100"
      >
        <FaSeedling style={{ fontSize: "2rem" }} />
        <h4 className="m-0">FundFair</h4>
      </Nav.Link> */}
      <NavItem className="w-100">
        <Nav.Link
          as={Link}
          to="/profile"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            margin: 0,
            color: "#004c46",
            borderLeft: "5px solid #f7bc45",
            background: "rgba(247, 188, 69, 0.2)",
            // backgroundColor: "#f1f1f1",
            width: "100%",
          }}
          className="p px-3 py-3"
        >
          <AiOutlineHome style={{ marginRight: "10px" }} />
          <p className="p-0 m-0 ml-4" style={{ marginLeft: "20px !important" }}>
            Dashboard
          </p>
        </Nav.Link>
      </NavItem>
      <NavItem className="w-100">
        <Nav.Link
          as={Link}
          // href="/profile/campaigns"
          to="/profile/campaigns"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            margin: 0,
            color: "#444",
            width: "100%",
          }}
          className="p px-3 py-3"
        >
          <FaRegCompass style={{ marginRight: "10px" }} />
          <p className="p-0 m-0 ml-4" style={{ marginLeft: "20px !important" }}>
            Campaigns
          </p>
        </Nav.Link>
      </NavItem>
      <NavItem className="w-100">
        <Nav.Link
          as={Link}
          to="donations"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            margin: 0,
            color: "#444",
            width: "100%",
          }}
          className="p px-3 py-3"
        >
          <RiSendPlaneFill style={{ marginRight: "10px" }} />
          <p className="p-0 m-0 ml-4" style={{ marginLeft: "20px !important" }}>
            Donations
          </p>
        </Nav.Link>
      </NavItem>
      <NavItem className="w-100">
        <Nav.Link
          as={Link}
          to="analytics"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            margin: 0,
            color: "#444",
            width: "100%",
          }}
          className="p px-3 py-3"
        >
          <RiBarChartFill style={{ marginRight: "10px" }} />
          <p className="p-0 m-0 ml-4" style={{ marginLeft: "20px !important" }}>
            Analytics
          </p>
        </Nav.Link>
      </NavItem>
    </Nav>
  );
};

export default SideBar;
