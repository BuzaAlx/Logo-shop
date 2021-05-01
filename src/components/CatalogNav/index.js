import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import "./styles.scss";
import Item from "./Item";
import { data } from "./data";

function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visibleSideID, setVisibleSideID] = useState(null);
  let burgerClasses = `menu-main__body menu-body ${menuOpen ? "_open" : ""}`;

  return (
    <nav className="main__menu menu-main">
      <div className="menu-main__head">
        <div className="menu-main__title">Каталог товаров</div>
        <div
          className="menu-main__burger"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
      </div>
      <div className={burgerClasses}>
        <ul
          className="menu-body__list"
          onMouseLeave={(e) => setVisibleSideID(null)}
        >
          {data.map((el) => {
            return (
              <Item
                {...el}
                visibleSideID={visibleSideID}
                setVisibleSideID={setVisibleSideID}
              />
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
