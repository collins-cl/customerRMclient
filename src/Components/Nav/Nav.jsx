import React from "react";
import Dummy from "../Dummy";
import NavCss from "../Nav/Nav.module.css";
import Card from "./Card/Card";

const Nav = () => {
  const Items = Dummy;

  return (
    <div className={NavCss.nav}>
      <div className={NavCss.wrapper}>
        {Items.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Nav;
