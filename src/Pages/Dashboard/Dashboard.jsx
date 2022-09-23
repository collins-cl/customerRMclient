import React from "react";
import "../Dashboard/Dashboard.css";
import Interactions from "../../Components/Interactions/Interactions";
import Dashcontent from "../../Components/DashDisplay/Dashcontent";
import Rechart from "../../Components/Rechart/Rechart";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const Dashboard = () => {
  const data = [
    {
      name: "Cole Dev",
      email: "lorem@gmail.com",
      company: "Lorem LLC",
    },
    {
      name: "ReactJS",
      email: "lorem@gmail.com",
      company: "Lorem LLC",
    },
    {
      name: "NodeJS",
      email: "lorem@gmail.com",
      company: "Lorem LLC",
    },
    {
      name: "CSS3",
      email: "lorem@gmail.com",
      company: "Lorem LLC",
    },
    {
      name: "ExpressJs",
      email: "lorem@gmail.com",
      company: "Lorem LLC",
    },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-wrapper">
        <div className="greeting">
          <div className="welcome">
            <div className="head">Dashboard</div>
            <p>Welcome, it's great to see you again collins!</p>
          </div>

          <div className="int">
            <Interactions />
          </div>
        </div>

        <div>
          <Dashcontent />
        </div>

        <div className="chart-other-flex">
          <div className="chart">
            <Rechart />
          </div>

          <div className="cof-2">
            <p>Top Customers</p>
            <TableContainer>
              <Table sx={{ minWidth: "400px" }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="center">Company</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((item) => (
                    <TableRow key={item.name}>
                      <TableCell component="th" scope="row" sx={{fontSize:"14px"}}>
                        {item.name}
                      </TableCell>
                      <TableCell align="right" sx={{fontSize:"14px"}}>{item.email}</TableCell>
                      <TableCell align="right" sx={{fontSize:"14px"}}>{item.company}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
