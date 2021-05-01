import React from "react";
import useWindowSize from "../../../hooks/useWindowSize";
import Product from "../../Product";
import SubmenuList from "../SubmenuList";

function Item({
  submenu,
  id,
  label,
  visibleSideID,
  setVisibleSideID,
  acordionItem,
  setAcordionItem,
}) {
  const { width } = useWindowSize();
  let isTablet = width < 1000;

  let classItem = `menu-body__item ${
    visibleSideID === id ? "menu-body__item--active" : ""
  }`;
  let classLink = `menu-body__link ${submenu ? "menu-body__link--parent" : ""}`;
  let classSubMenu = `submenu ${
    submenu && visibleSideID === id ? "submenu--open" : ""
  }`;

  let handleEnter = (e) => {
    if (isTablet) return;
    if (!submenu) {
      setVisibleSideID(null);
      return;
    }
    setVisibleSideID(id);
  };
  // ----------------------
  const handleClick = (e) => {
    if (!isTablet || !submenu) return;
    setAcordionItem((prevId) => {
      if (prevId === id) {
        return null;
      } else {
        return id;
      }
    });
  };

  return (
    <li
      className={classItem}
      key={id}
      onClick={(e) => handleClick(e)}
      onMouseEnter={(e) => handleEnter(e)}
    >
      <a className={classLink} href="#">
        {label}
      </a>

      <div
        className={classSubMenu}
        onMouseEnter={(e) => setVisibleSideID(id)}
        onMouseLeave={(e) => setVisibleSideID(null)}
      >
        <SubmenuList />
        <div className="submenu__product">
          <Product />
        </div>
      </div>
      {acordionItem === id && <SubmenuList acordion />}
    </li>
  );
}

export default Item;
