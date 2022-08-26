import React from "react";
import PicksCss from "../Picks/Picks.module.css";
import image1 from "../image1.jpg";
import image2 from "../image2.jpg";
import image3 from "../image3.jpg";
import image4 from "../image4.jpg";
import image5 from "../image9.jpg";

function Picks() {
  return (
    <div className={PicksCss.picks}>
      <div className={PicksCss.pickscontainer}>
        <div className={PicksCss.picks1}>
          <img src={image1} alt="" />
        </div>
        <div className={PicksCss.picks1}>
          <img src={image2} alt="" />
        </div>
        <div className={PicksCss.picks1}>
          <img src={image3} alt="" />
        </div>
        <div className={PicksCss.picks1}>
          <img src={image4} alt="" />
        </div>
        <div className={PicksCss.picks1}>
          <img src={image5} alt="" />
        </div>
      </div>

      <div className={PicksCss.pickstext}>OUR PICKS FOR YOU</div>
    </div>
  );
}

export default Picks;
