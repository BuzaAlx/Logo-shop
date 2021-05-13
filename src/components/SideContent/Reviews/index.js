import React from "react";

const reviewsData = [
  {
    userName: "Павел Никифоров",
    date: "12.09.2015",
    text:
      "Ради экономии места в тренажерном зале приобрел многофункциональный силовой тренажер Life Gear. За такую небольшую стоимость и с такими возможностями, он просто не заменим.",
  },
  {
    userName: "Степан Николаевич",
    date: "12.09.2015",
    text:
      "Спасибо за прекрасный совет, велосипед всей семье понравился и цену за него достойную запросили.",
  },
];

function Reviws() {
  return (
    <div className="side-content__rewievs-side rewievs-side">
      <a href="#" className="reviews-side__title side-title">
        Отзывы
      </a>
      <div className="reviews-side__items">
        {reviewsData.map(({ userName, date, text }) => {
          return (
            <a className="reviews-side__item">
              <div className="reviews-side__header">
                <div className="reviews-side__user">{userName}</div>
                <div className="reviews-side__data">{date}</div>
              </div>
              <div className="reviews-side__body">{text}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Reviws;
