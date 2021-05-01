import React from "react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "./styles.scss";
import image_1 from "../../assets/img/mainslider/01.jpg";
import image_2 from "../../assets/img/mainslider/02.jpg";

// ---
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination]);
// ---

export default function Slider() {
  return (
    <div className="main-slider">
      <Swiper
        slidesPerView="auto"
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            className += ` slide${index + 1}`;
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        }}
      >
        <SwiperSlide>
          <Slide bg={image_1} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide bg={image_2} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

const Slide = ({ bg }) => {
  return (
    <>
      <div className="main-slider__content">
        <div className="main-slider__title">
          <span className="main-slider__title-text">Мега</span> Распродажа
        </div>
        <div className="main-slider__subtitle">
          <p>
            <span className="main-slider__text-1">Успей купить</span> тренажеры
          </p>
          <p>
            <span className="main-slider__text-2">По старой цене</span>
          </p>
          <p>
            до их<span className="main-slider__text-3">повышения</span>
          </p>
        </div>
        <div className="main-slider__footer">
          <div className="main-slider__price">от 45 000</div>
          <a className="main-slider__about" href="#">
            <span>Подробнее</span>
          </a>
        </div>
      </div>
      <div className="main-slider__bg-image">
        <img src={bg} alt="slide" />
      </div>
    </>
  );
};
