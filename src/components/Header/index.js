import React, { useState } from "react";
import "./styles.scss";
import logo from "../../assets/img/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import useWindowSize from "../../hooks/useWindowSize";

function Header() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const { width } = useWindowSize();

  let isMobile = width < 800;

  return (
    <header
      className={`header ${
        isBurgerOpen && isMobile ? "header--burger-open" : ""
      }`}
    >
      <div className="container">
        <div className="header__top">
          <div className="header-top__row">
            <div className="header-top__col">
              <div
                className="burger"
                onClick={() => setIsBurgerOpen((isOpen) => !isOpen)}
              >
                {isBurgerOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
              </div>
              <nav
                className={`header-top_navigation ${isBurgerOpen && "_active"}`}
              >
                {isMobile && isBurgerOpen && <UserActions fullWidth />}
                <ul className="header-top__menu menu">
                  <li className="menu__item">
                    <a href="#">Бренды</a>
                  </li>
                  <li className="menu__item">
                    <a href="#">Распродажа</a>
                  </li>
                  <li className="menu__item">
                    <a href="#">Доставка и Сборка</a>
                  </li>
                  <li className="menu__item">
                    <a href="#">Гарантия</a>
                  </li>
                  <li className="menu__item">
                    <a href="#">Оплата</a>
                  </li>
                  <li className="menu__item">
                    <a href="#">Контакты</a>
                  </li>
                </ul>
                {isMobile && isBurgerOpen && <CallbackButton />}
              </nav>
            </div>
            <div className="header-top__col header-top__col-logo">
              <a href="#">
                <picture>
                  {/* <source srcset="img/logo.webp" type="image/webp" /> */}
                  <img src={logo} alt="logo" />
                </picture>
              </a>
            </div>
            <div className="header-top__col">
              <div className="header-top-contacts contacts-header">
                <div className="contacts-header__column">
                  <div className="contacts-header__icon">
                    <div className="contacts-header__text">Москва</div>
                    <a
                      className="contacts-header__phone"
                      href="tel:84991234567"
                    >
                      8-499-123-45-67
                    </a>
                  </div>
                </div>
                <div className="contacts-header__column contacts-header__column--border">
                  <div className="contacts-header__text">
                    Бесплатно для России
                  </div>
                  <a className="contacts-header__phone" href="tel:84991234567">
                    8-800-123-45-67
                  </a>
                </div>
                {isMobile && (
                  <div className="contacts-header__column">
                    <Basket />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="header__bottom">
          {!isMobile && <UserActions />}
          <div className="header__bottom-column header-info">
            <div className="header-info__column">
              {!isMobile && <CallbackButton />}
            </div>
            <div className="header-info__column">
              <div className="header-info__shedule with-icon">
                <p className="work-time">
                  <span>Пн–Пт:</span>
                  "09:00–21:00;"
                </p>
                <p className="work-time">
                  <span>Сб–Вс:</span>
                  "10:00–20:00"
                </p>
              </div>
            </div>
            <div className="header-info__column">{!isMobile && <Basket />}</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

function UserActions({ fullWidth }) {
  return (
    <div className="header__bottom-column">
      <ul
        className={`header__bottom-actions user-actions ${
          fullWidth ? "header__bottom-actions--fullWidth" : ""
        }`}
      >
        <li>
          <a
            className="user-actions__action user-actions__action--sign-in  with-icon"
            href="#"
          >
            <span>Вход</span>
          </a>
        </li>
        <li>
          <a
            className="user-actions__action with-icon user-actions__action--sign-up"
            href="#"
          >
            <span>Регистрация</span>
          </a>
        </li>
        <li>
          <a
            className="user-actions__action with-icon user-actions__action--email"
            href="mailto:sport@gmail.com"
          >
            <span>sport@gmail.com</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

function Basket() {
  return (
    <a href="#" className="shoping_basket">
      <span>12</span>
    </a>
  );
}

function CallbackButton() {
  return (
    <a href="#" className="header-info__callback with-icon">
      <span>Обратный звонок</span>
    </a>
  );
}
