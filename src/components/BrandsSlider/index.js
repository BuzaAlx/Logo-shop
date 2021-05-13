import React from "react";
import "./styles.scss";
import brandImage from "../../assets/img/brands/01.jpg";

//
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, Autoplay]);
//

function BrandsSlider() {
  return (
    <div className="main__brands brands-slider">
      <div className="brands-slider__container container">
        <div className="brands-slider__body">
          <Swiper
            observeParents={true}
            observer={true}
            loop={true}
            autoplay={{
              delay: 5000,
            }}
            autoHeight={true}
            slidesPerView={2}
            spaceBetween={0}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            speed={800}
            navigation={{
              nextEl: ".brands-slider__arrow--next",
              prevEl: ".brands-slider__arrow--prev",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="brands-slider__arrows">
          <div className="brands-slider__arrow brands-slider__arrow--prev arrow arrow-prev"></div>
          <div className="brands-slider__arrow brands-slider__arrow--next arrow"></div>
        </div>
      </div>
    </div>
  );
}

export default BrandsSlider;

const Slide = () => {
  return (
    <div className="brands-slider__slide">
      <img src={brandImage} alt="slide" />
    </div>
  );
};
