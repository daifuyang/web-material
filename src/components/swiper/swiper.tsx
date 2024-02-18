import * as React from 'react';
import { createElement } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

export interface SwiperProps {
  __designMode?: string;
}

const MySwiper: React.FC<SwiperProps> = function MySwiper({ __designMode, ...otherProps }) {
  if (__designMode == 'design') {
    return <div className="swiper-design">轮播图</div>;
  }

  return (
    <Swiper className="mySwiper">
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
