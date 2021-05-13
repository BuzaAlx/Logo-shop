import React, { useState, useEffect } from "react";
import "./styles.scss";
import SidebarNavigation from "../Sidebar";
import SideContent from "../SideContent";
import SearchPanel from "../Search-Panel";
import Slider from "../Slider";
import ProductsList from "../Products-List";
import useWindowSize from "../../hooks/useWindowSize";
import BrandsSlider from "../BrandsSlider";
import About from "../About";
import Info from "../Info";

function Content() {
  const { width } = useWindowSize();

  return (
    <main className="main">
      <div className="main__container container">
        <aside className="main__aside">
          <SidebarNavigation />
          {width > 1000 && <SideContent />}
        </aside>
        <div className="main__content">
          <SearchPanel />
          <Slider />
          <ProductsList />
          {width < 1000 && <SideContent />}
        </div>
      </div>
      <BrandsSlider />
      <About />
      <Info />
    </main>
  );
}

export default Content;
