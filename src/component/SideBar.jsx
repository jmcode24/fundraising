import React from "react";
import { Nav, NavItem } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegCompass } from "react-icons/fa";
import { RiBarChartFill, RiSendPlaneFill } from "react-icons/ri";
import { NavLink, useLocation } from "react-router-dom";

const SideBar = () => {
  let location = useLocation();

  return (
    <Nav className="flex-direction-column p-0 mx-0 mt-1 ">
      <NavItem className="w-100">
        <NavLink
          to="/profile"
          className={
            location.pathname === "/profile" ? "active-link " : "link "
          }
        >
          <AiOutlineHome style={{ marginRight: "10px" }} />
          <p className="p-0 m-0 ">Dashboard</p>
        </NavLink>
      </NavItem>
      <NavItem className="w-100">
        <NavLink
          to="campaigns"
          className={({ isActive }) => (isActive ? "active-link " : "link ")}
        >
          <FaRegCompass style={{ marginRight: "10px" }} />
          <p className="p-0 m-0 ">Campaigns</p>
        </NavLink>
      </NavItem>
      <NavItem className="w-100">
        <NavLink
          to="donations"
          className={({ isActive }) => (isActive ? "active-link " : "link ")}
        >
          <RiSendPlaneFill style={{ marginRight: "10px" }} />
          <p className="p-0 m-0 ">Donations</p>
        </NavLink>
      </NavItem>
      <NavItem className="w-100">
        <NavLink
          to="analytics"
          className={({ isActive }) => (isActive ? "active-link " : "link ")}
        >
          <RiBarChartFill style={{ marginRight: "10px" }} />
          <p className="p-0 m-0 ">Analytics</p>
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default SideBar;
