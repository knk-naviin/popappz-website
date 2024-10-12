import React from "react";
import Union from "../../assets/goals.png";
import Mis from "../../assets/mis.png";
import Vis from "../../assets/vis.png";
import SDGS from "../../assets/sdgs.png";
import "../../styles/OurGoals.css";

const OurGoals = () => {
  return (
    <div className="union-box">
      <img src={Union} width="1200" className="imgsrc" alt="Union" />

      <div className="container">
        <img src={Mis} className="mission" width="463" height="383" />
        <img src={Vis} className="vision" width="463" height="383" />
        <img src={SDGS} className="sdgs" width="1220" height="630" alt="SDGs" />
      </div>
    </div>
  );
};

export default OurGoals;
