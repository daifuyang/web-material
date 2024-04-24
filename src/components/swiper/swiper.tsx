import * as React from 'react';
import { createElement } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { bizCssPrefix } from '../../variables';

export interface SwiperProps {
  __designMode?: string;
  items?: any[];
  style?: React.CSSProperties;
  navigation: boolean;
  pagination: boolean;
  autoplay: boolean;
  loop: boolean;
}

const MySwiper: React.FC<SwiperProps> = function MySwiper(props: SwiperProps) {
  const { __designMode, items = [], style, navigation, pagination, autoplay, loop } = props
  let newItems = [...items];
  console.log('props', props)
  if (__designMode === 'design') {
    if (newItems?.length > 0) {
      newItems = [newItems[0]]
      // return <img src={items[0].src} alt={items[0].alt} />
    } else {
      return <div style={style} className="swiper-design">轮播图</div>
    }
  }

  let swiperProps: any = {
    navigation,
    pagination,
    simulateTouch: true,
    autoplay,
    loop,
  }

  if (__designMode === 'design') {
    swiperProps = {
      navigation,
      pagination,
      simulateTouch: false,
      autoplay: false,
      loop: false,
    }
  }

  return (
    <Swiper style={style} {...swiperProps} modules={[Navigation, Autoplay, Pagination]} observer className={`${bizCssPrefix}-swiper`}>
      {items.map((item, key) => {
        return (
          <SwiperSlide key={key}>
            <img src={item.src} alt={item.alt} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default MySwiper;
