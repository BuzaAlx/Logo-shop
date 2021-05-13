import React from "react";

const newsData = [
  {
    label: "Снижение цен на игровые площадки Jungle Gym",
    data: [12, "авг"],
    text:
      "Уважаемые покупатели! Мы рады сообщить вам о снижениицены с 27 июля на детский игровой комплекс",
  },
  {
    label: "Поступление батутов Eclipse!",
    data: [19, "авг"],
    text:
      " Уважаемые покупатели! Мы рады сообщить вам о снижениицены с 27 июля на детский игровой комплекс",
  },
];

function News() {
  return (
    <div className="side-content__news-side news-side">
      <a href="#" className="news-side__title side-title">
        Новости
      </a>
      <div className="news-side__items">
        {newsData.map(({ label, data, text }) => {
          return (
            <div className="news-side__item">
              <a href="#" className="news-side__label">
                {label}
              </a>
              <div className="news-side__body">
                <div className="news-side__data">
                  <span>{data[0]}</span>
                  {data[1]}
                </div>
                <div className="news-side__text">{text}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default News;
