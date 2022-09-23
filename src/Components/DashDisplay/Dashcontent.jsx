import React from "react";
import "../DashDisplay/Dashcontent.css";
import {
  MdOutlineBook,
  MdOutlineShoppingCart,
  MdPeopleOutline,
  MdStarOutline,
} from "react-icons/md";
import { IoMdHappy } from "react-icons/io";

const Dashcontent = () => {
  return (
    <div className="hero-total-equity">
      <div className="total-sales">
        <div className="ts-flex-1">
          <MdOutlineBook />
          <span>Total Sales</span>
        </div>
        <div className="ts-2">$20,001,202.54</div>
        <div className="ts-3">+20k this week</div>
      </div>

      <div className="total-visitors">
        <div className="ts-flex-1">
          <MdPeopleOutline />
          <span>Visitors</span>
        </div>
        <div className="ts-2">9,100</div>
        <div className="ts-3">+103 this week</div>
      </div>

      <div className="total-orders">
        <div className="ts-flex-1">
          <MdOutlineShoppingCart />
          <span>Total Orders</span>
        </div>
        <div className="ts-2">1,908,888</div>
        <div className="ts-3">+12k this week</div>
      </div>

      <div className="today-sale">
        <div className="ts-flex-1">
          <MdStarOutline />
          <span>Today's Sale</span>
        </div>
        <div className="ts-2">$10,822.09</div>
      </div>
      <div className="happy-visitors">
        <div className="ts-flex-1">
          <IoMdHappy />
          <span>Happy visitors</span>
        </div>
        <div className="ts-2">84</div>
      </div>
    </div>
  );
};

export default Dashcontent;
