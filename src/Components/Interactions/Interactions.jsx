import React from "react";
import "../Interactions/Interactions.css";
import { IconButton, Avatar } from "@mui/material";
import { MdOutlineSearch } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Interactions = () => {
  return (
    <div className="interactions">
      <div className="search">
        <IconButton sx={{ color: "inherit" }}>
          <MdOutlineSearch />
        </IconButton>
      </div>

      <div className="notifications">
        <IconButton sx={{ color: "inherit" }} id="alert">
          <IoMdNotificationsOutline />
          <p>0</p>
        </IconButton>
      </div>

      <div className="profile-bar">
        <div className="profile-icon">
          <Avatar
            to="/rum"
            component={Link}
            sx={{
              width: 30,
              height: 30,
              fontSize: "15px",
              color: "inherit",
              fontWeight: "bold",
            }}
          >
            B
          </Avatar>
        </div>
        <h5>Collins Olads</h5>
      </div>
    </div>
  );
};

export default Interactions;
