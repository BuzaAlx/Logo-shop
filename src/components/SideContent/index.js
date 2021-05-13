import React from "react";
import News from "./News";
import Reviws from "./Reviews";
import "./styles.scss";

function SideContent() {
  return (
    <div className="side-content">
      <News />
      <Reviws />
    </div>
  );
}

export default SideContent;
