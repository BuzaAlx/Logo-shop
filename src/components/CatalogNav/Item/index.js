import React from "react";
import Product from "../../Product";

function Item({ submenu, id, label, visibleSideID, setVisibleSideID }) {
  let classItem = `menu-body__link ${submenu ? "menu-body__link--parent" : ""}`;

  let classSubMenu = `submenu ${
    submenu && visibleSideID === id ? "submenu--open" : ""
  }`;

  // let classSubMenu = "submenu submenu--open";

  let handleEnter = (e) => {
    if (!submenu) {
      setVisibleSideID(null);
      return;
    }
    setVisibleSideID(id);
  };

  return (
    <li
      className={`menu-body__item ${
        visibleSideID === id ? "menu-body__item--active" : ""
      }`}
      key={id}
      onMouseEnter={(e) => handleEnter(e)}
    >
      <a className={classItem} href="#">
        {label}
      </a>

      <div
        className={classSubMenu}
        onMouseEnter={(e) => setVisibleSideID(id)}
        onMouseLeave={(e) => setVisibleSideID(null)}
      >
        <ul className="submenu__list">
          <li>
            <a className="submenu__link" href="#">
              Всепогодный
            </a>
          </li>
          <li>
            <a className="submenu__link" href="#">
              Для помещений
            </a>
          </li>
          <li>
            <a className="submenu__link" href="#">
              Профессиональный
            </a>
          </li>
          <li>
            <a className="submenu__link" href="#">
              Любительский
            </a>
          </li>
        </ul>
        <div className="submenu__product">
          <Product />
        </div>
      </div>
    </li>
  );
}

export default Item;
