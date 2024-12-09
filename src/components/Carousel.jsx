import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselSlide from './CarouselSlide';
import { useRef } from 'react';
import image1 from '../assets/code.svg'
import image2 from '../assets/programmer.svg'
import image3 from '../assets/develop.svg'

import 'swiper/css';
import 'swiper/css/navigation';


export default function Carousel() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <>
            <button ref={prevRef} className="custom-prev">
                ← Назад
            </button>
            <button ref={nextRef} className="custom-next">
                Вперед →
            </button>
            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    // Связываем кнопки с элементами Swiper
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
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
        </>
    );
};
