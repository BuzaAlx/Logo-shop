import React from "react";
import Product from "../Product";
import "./styles.scss";
import imageForProduct from "../../assets/img/products/02.jpg";

// ---
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation]);
// ---

function ProductsList() {
  return (
    <section className="products-slider">
      <div className="products-slider__head">
        <h3 className="products-slider__title">Популярные товары</h3>
        <div className="products-slider__controll-panel">
          <div className="arrow arrow-prev swiper-button-prev"></div>
          <div className="products-slider__info"></div>
          <div className="arrow arrow-next swiper-button-next"></div>
        </div>
      </div>
      <div className="products-slider__body">
        <Swiper
          observeParents={true}
          observer={true}
          autoHeight={true}
          slidesPerView={1}
          spaceBetween={0}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          speed={800}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".products-slider__info",
            type: "fraction",
          }}
        >
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default ProductsList;

const Slide = () => {
  return (
    <div className="slide-container products-items">
      <div className="products-items__column">
        <Product
          image={imageForProduct}
          title={"BH Fitness F1 G6414V"}
          productName={"Беговая дорожка"}
        />
      </div>
      <div className="products-items__column">
        <Product
          image={imageForProduct}
          title={"BH Fitness F1 G6414V"}
          productName={"Беговая дорожка"}
          oldPrice={"65 990"}
        />
      </div>
      <div className="products-items__column">
        <Product
          image={imageForProduct}
          title={"BH Fitness F1 G6414V"}
          productName={"Беговая дорожка"}
        />
      </div>
      <div className="products-items__column">
        <Product
          image={imageForProduct}
          title={"BH Fitness F1 G6414V"}
          productName={"Беговая дорожка"}
        />
      </div>
      <div className="products-items__column">
        <Product
          image={imageForProduct}
          title={"BH Fitness F1 G6414V"}
          productName={"Беговая дорожка"}
        />
      </div>
      <div className="products-items__column">
        <Product
          image={imageForProduct}
          title={"BH Fitness F1 G6414V"}
          productName={"Беговая дорожка"}
        />
      </div>
      <div className="products-items__column">
        <Product
          image={imageForProduct}
          title={"BH Fitness F1 G6414V"}
          productName={"Беговая дорожка"}
        />
      </div>
      <div className="products-items__column">
        <Product
          image={imageForProduct}
          title={"BH Fitness F1 G6414V"}
          productName={"Беговая дорожка"}
        />
      </div>
      <div className="products-items__column">
        <Product
          image={imageForProduct}
          title={"BH Fitness F1 G6414V"}
          productName={"Беговая дорожка"}
        />
      </div>
    </div>
  );
};
