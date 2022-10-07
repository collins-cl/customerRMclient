import React from "react";
import Interactions from "../../Components/Interactions/Interactions";
import "../NewCustomer/NewCustomer.css";

const NewCustomer = () => {
  return (
    <div className="newcustomer">
      <div className="new-c-wrapper">
        <div className="head">
          <div className="header">Customers</div>
          <Interactions />
        </div>

        <div className="body">

        </div>
      </div>
    </div>
  );
};

export default NewCustomer;
