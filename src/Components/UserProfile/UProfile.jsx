import React from "react";
import "../UserProfile/UProfile.css";
import { Avatar } from "@mui/material";

const UProfile = ({ name }) => {
  return (
    <div className="customer-details">
      <div className="header">Customer Detail</div>

      <div className="c-d-wrapper">
        <div className="avatar">
          <Avatar sx={{ width: "110px", height: "110px" }} className="a-png">
            CS
          </Avatar>
        </div>

        <div className="c-d-info">
          <div className="name">{name}</div>
          <div className="id">1235367</div>
        </div>

        <div className="email">computerscience@gmail.com</div>

        <div className="c-orders">
          <div className="head">Orders:</div>
          <div className="u-orders">
            <table className="table">
              <tr>
                <th>Item</th>
                <th>Total Orders</th>
              </tr>

              <tr>
                <td>Table</td>
                <td>12</td>
              </tr>
              <tr>
                <td>Table</td>
                <td>12</td>
              </tr>
              <tr>
                <td>Table</td>
                <td>12</td>
              </tr>
            </table>

            <div className="actions-btns">
              <div className="edit">Edit</div>
              <div className="delete">Delete</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UProfile;
