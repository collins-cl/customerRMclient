import React, { useState } from "react";
import "../Sidebar/SideBar.css";
import {
  MdCompare,
  MdBarChart,
  MdBook,
  MdOutlineShoppingCart,
  MdOutlineSettings,
  MdExitToApp,
  MdOutlineBookmark,
  MdBrightness7,
  MdBrightness4,
} from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = ({ theme, toggle }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={open ? "sidebar" : "sidebar active"}>
      <div className="sidebar-wrapper">
        <div className="logo">
          <div className="logo-x">
            <MdCompare />
            <p>CoLe</p>
          </div>
        </div>

        <div className="navigation">
          <div className={open ? "nav-links" : "nav-links active"}>
            <Link to="/rum">
              <MdBarChart />
              <p>Overview</p>
            </Link>
            <Link to="">
              <FaUsers />
              <p>Customers</p>
            </Link>
            <Link to="">
              <MdBook />
              <p>Products</p>
            </Link>
            <Link to="">
              <MdOutlineShoppingCart />
              <p>Orders</p>
            </Link>
            <Link to="">
              <MdOutlineBookmark />
              <p>Feedbacks</p>
            </Link>
            <Link to="">
              <MdOutlineSettings />
              <p>Settings</p>
            </Link>
          </div>

          <div className="help">
            <div className="mode" onClick={() => toggle()}>
              {theme.palette.mode === "light" ? (
                <MdBrightness4 />
              ) : (
                <MdBrightness7 />
              )}{" "}
              <p>Mode</p>
            </div>
            <div className="logout">
              <MdExitToApp />
              <p>Log out</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
