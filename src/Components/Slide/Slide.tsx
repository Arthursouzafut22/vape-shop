import * as S from "./Styles";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Img1 from "../../assets/image/img1.webp";
import Img2 from "../../assets/image/img2.webp";
import Img3 from "../../assets/image/img3.webp";
import Img4 from "../../assets/image/img4.webp";

const Slide: React.FC = () => {
  return (
    <S.WrapperSlide>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          476: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide>
          <img src={Img1} style={{ maxWidth: "100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img2} style={{ maxWidth: "100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img3} style={{ maxWidth: "100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img4} style={{ maxWidth: "100%" }} />
        </SwiperSlide>
      </Swiper>
    </S.WrapperSlide>
  );
};

export default Slide;
