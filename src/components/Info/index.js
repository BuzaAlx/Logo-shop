import React from "react";
import "./styles.scss";

function Info() {
  return (
    <section className="main__info-menu menu-info">
      <div className="menu-info__container container">
        <div className="menu-info__body">
          <div className="menu-info__row">
            <div className="menu-info__label">Информация:</div>
            <ul className="menu-info__list">
              <li>
                <a href="#" className="menu-info__link">
                  Бренды
                </a>
              </li>
              <li>
                <a href="#" className="menu-info__link">
                  Доставка
                </a>
              </li>
              <li>
                <a href="#" className="menu-info__link">
                  Распродажа
                </a>
              </li>
              <li>
                <a href="#" className="menu-info__link">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="menu-info__link">
                  Отзывы
                </a>
              </li>
            </ul>
          </div>
          <div className="menu-info__row">
            <div className="menu-info__label">Помощь:</div>
            <ul className="menu-info__list">
              <li>
                <a href="#" className="menu-info__link">
                  Как заказать
                </a>
              </li>
              <li>
                <a href="#" className="menu-info__link">
                  Доставка
                </a>
              </li>
              <li>
                <a href="#" className="menu-info__link">
                  Оплата
                </a>
              </li>
              <li>
                <a href="#" className="menu-info__link">
                  Гарантия и Сборка
                </a>
              </li>
              <li>
                <a href="#" className="menu-info__link">
                  Возврат
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
