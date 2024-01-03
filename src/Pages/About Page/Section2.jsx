import React from "react";
import Img1 from "../../Assests/about-us/asset-3.jpeg";
import Img2 from "../../Assests/about-us/asset-4.jpeg";
import Img3 from "../../Assests/about-us/asset-5.jpeg";
import Img4 from "../../Assests/about-us/asset-6.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";

function Section2() {
  const imgData = [{ url: Img1 }, { url: Img2 }, { url: Img3 }, { url: Img4 }];
  return (
    <section>
      <div className="slider-section">
        <Swiper
        //   loop={true}
          slidesPerView={1}
          spaceBetween={0}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay ]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
          className="mySwiper"
        >
          {imgData.map((item, i) => (
            <SwiperSlide key={i}>
              
                <img src={item.url} alt="" />
              
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Section2;
