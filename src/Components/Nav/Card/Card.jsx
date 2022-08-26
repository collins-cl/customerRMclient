import React from "react";
import Css from "../Card/Card.module.css";

const Card = ({ item }) => {
  return (
    <div>
      <div className={Css.wrapper}>
        <div className={Css.img}></div>

        <div className={Css.description}>{item.description1}</div>

        <div className={Css.description2}>{item.description2}</div>
      </div>
    </div>
  );
};

export default Card;
