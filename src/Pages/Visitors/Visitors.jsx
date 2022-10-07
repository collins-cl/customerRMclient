import React, { useState } from "react";
import Interactions from "../../Components/Interactions/Interactions";
import "../Visitors/Visitors.css";
import { MdSort, MdPlusOne } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import UProfile from "../../Components/UserProfile/UProfile";
import Utable from "../../Components/UsersTable/Utable";

const Visitors = () => {
  const [open, setOpen] = useState(false);
  const [showinfo, setShowInfo] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "firstName", headerName: "First name", width: 110, flex: 1 },
    { field: "lastName", headerName: "Last name", width: 120, flex: 1 },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",

      width: 160,
      flex: 1,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", email: "collins@gmail.com" },
    {
      id: 2,
      lastName: "Lannister",
      firstName: "Cersei",
      email: "collins@gmail.com",
    },
    {
      id: 3,
      lastName: "Lannister",
      firstName: "Jaime",
      email: "collins@gmail.com",
    },
    { id: 4, lastName: "Stark", firstName: "Arya", email: "collins@gmail.com" },
    {
      id: 5,
      lastName: "Targaryen",
      firstName: "Daenerys",
      email: "collins@gmail.com",
    },
    {
      id: 6,
      lastName: "Melisandre",
      firstName: null,
      email: "collins@gmail.com",
    },
    {
      id: 7,
      lastName: "Clifford",
      firstName: "Ferrara",
      email: "collins@gmail.com",
    },
    {
      id: 8,
      lastName: "Frances",
      firstName: "Rossini",
      email: "collins@gmail.com",
    },
    {
      id: 9,
      lastName: "Roxie",
      firstName: "Harvey",
      email: "collins@gmail.com",
    },
    {
      id: 10,
      lastName: "Roxie",
      firstName: "Harvey",
      email: "collins@gmail.com",
    },
    {
      id: 11,
      lastName: "Roxie",
      firstName: "Harvey",
      email: "collins@gmail.com",
    },
    {
      id: 12,
      lastName: "Roxie",
      firstName: "Harvey",
      email: "collins@gmail.com",
    },
    {
      id: 13,
      lastName: "Roxie",
      firstName: "Harvey",
      email: "computerscience@gmail.com",
    },
  ];

  const { id } = useParams();

  const [name, setName] = useState("Collins");

  const toggleShowInfo = () => {
    setShowInfo(true);
    if (id === rows.id) {
      setName(rows.lastName);
    }
  };

  return (
    <div className="visitors">
      <div className="visitors-wrapper">
        <div className="head">
          <div className="header">Customers</div>
          <Interactions />
        </div>

        <div className="v-w-flex">
          <div className="customers-list">
            <div className="customers-list-header">
              <div className="head">Customer's List</div>
              <div className="right-float">
                <div className="filter-items">
                  <div onClick={handleClick} className="filter">
                    <MdSort />
                    <p>Sort</p>
                  </div>

                  {open ? (
                    <div className="options">
                      <div onClick={handleClose}>By Asc</div>
                      <hr />
                      <div onClick={handleClose}>By Dsc</div>
                    </div>
                  ) : null}
                </div>

                <div className="add-customers">
                  <Link to="/customers/createnew">
                    <FaPlus
                      style={{ fontWeight: "lighter", fontSize: "14px" }}
                    />
                    <p>Add User</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="list-of-users">
              <Utable
                rows={rows}
                columns={columns}
                toggleShowInfo={toggleShowInfo}
                id={id}
              />
            </div>
          </div>

          {showinfo ? <UProfile name={name} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Visitors;
