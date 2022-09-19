import React from "react";
import "../Dashboard/Dashboard.css";
import Interactions from "../../Components/Interactions/Interactions";

import Dashcontent from "../../Components/DashDisplay/Dashcontent";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-wrapper">
        <div className="greeting">
          <div className="welcome">
            <div className="head">Dashboard</div>
            <p>Welcome, it's great to see you again collins!</p>
          </div>

          <Interactions />
        </div>

        <div>
          <Dashcontent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
