import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CarouselSlide from './CarouselSlide';

export default function Carousel() {
    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <CarouselSlide />
            </SwiperSlide>
            <SwiperSlide>
                <CarouselSlide />
            </SwiperSlide>
            <SwiperSlide>
                <CarouselSlide />
            </SwiperSlide>
            <SwiperSlide>
                <CarouselSlide />
            </SwiperSlide>

        </Swiper>
    );
};
