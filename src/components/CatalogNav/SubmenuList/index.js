import React from "react";
import "./styles.scss";

function SubmenuList({ acordion }) {
  let listClass = acordion ? "submenu__list vertical-list" : "submenu__list";

  let linkClass = acordion ? "submenu__link vertical-link" : "submenu__link";

  return (
    <ul className={listClass}>
      <li>
        <a className={linkClass} href="#">
          Всепогодный
        </a>
      </li>
      <li>
        <a className={linkClass} href="#">
          Для помещений
        </a>
      </li>
      <li>
        <a className={linkClass} href="#">
          Профессиональный
        </a>
      </li>
      <li>
        <a className={linkClass} href="#">
          Любительский
        </a>
      </li>
    </ul>
  );
}

export default SubmenuList;
