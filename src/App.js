import Main from "./pages/main";
// import Swiper core and required modules
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// import { Swiper, SwiperSlide } from "swiper/react";
import "./App.scss";

// import "swiper/swiper.scss";
// import "swiper/components/pagination/pagination.scss";

// install Swiper modules
// SwiperCore.use([Pagination]);

function App() {
  return (
    <div>
      <Main />
      {/* <div className="slider-container"> */}
      {/* <Swiper
          slidesPerView={1}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return (
                '<span class="' + className + '">' + (index + 1) + "</span>"
              );
            },
          }}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="box">1</div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="box">2</div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="box">3</div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="box">4</div>
          </SwiperSlide>
        </Swiper> */}
      {/* </div> */}
    </div>
  );
}

export default App;
