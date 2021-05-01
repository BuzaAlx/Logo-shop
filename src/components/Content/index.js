import React, { useState, useEffect } from "react";
import "./styles.scss";
import CatalogNav from "../CatalogNav";
import SearchPanel from "../Search-Panel";
import Slider from "../Slider";

function Content() {
  return (
    <main className="main">
      <div className="main__container container">
        <aside className="main__aside">
          <CatalogNav />
        </aside>
        <div className="main__content">
          <SearchPanel />
          <Slider />
        </div>
      </div>
    </main>
  );
}

export default Content;
