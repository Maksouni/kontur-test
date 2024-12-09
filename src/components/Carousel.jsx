import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselSlide from './CarouselSlide';
import { useRef, useEffect } from 'react';
import image1 from '../assets/code.svg'
import image2 from '../assets/programmer.svg'
import image3 from '../assets/develop.svg'

import 'swiper/css';
import 'swiper/css/navigation';


export default function Carousel() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    useEffect(() => {
        // Убедитесь, что рефы обновились до передачи их в Swiper
        if (prevRef.current && nextRef.current) {
            const swiperEl = document.querySelector('.swiper');
            swiperEl.swiper.params.navigation.prevEl = prevRef.current;
            swiperEl.swiper.params.navigation.nextEl = nextRef.current;
            swiperEl.swiper.navigation.init();
            swiperEl.swiper.navigation.update();
        }
    }, []);
    return (
            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={150}
                navigation
                loop={true}
            >
                <SwiperSlide>
                    <CarouselSlide
                        image={image1}
                        title={
                            <>
                                Школа
                                <span style={{ color: 'var(--primary-color)' }}>{` {`}</span>
                                <span style={{ fontWeight: 700 }}>программирования</span>
                                <span style={{ color: 'var(--primary-color)' }}>{`} `}</span>
                                <br />для тех, кому нужны
                                <br />реальные навыки,
                                <br />а не просто сертификат
                            </>
                        }
                        paragraph={<>
                            Закажите звонок, и наш специалист свяжется с
                            <br />вами в ближайшее время
                        </>
                        }
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CarouselSlide
                        image={image2}
                        title={(<>Обучение<br />через практику</>)}
                        paragraph={<>
                            Всё, что вы узнали,
                            вы тут же начинаете<br /> применять на практике.
                            Вы сразу видите <br /> результаты своего труда.
                        </>
                        }
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CarouselSlide
                        image={image3}
                        title={(<>Весь материал разбит на<br />небольшие уроки</>)}
                        paragraph={<>
                            Теория и практика подаются маленькими<br /> порциями.
                            Так вам будет легче усваивать новые<br /> знания.
                        </>
                        }
                    />
                </SwiperSlide>

            </Swiper>
    );
};
