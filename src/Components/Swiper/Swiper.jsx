import Card from '../Card/Card';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = ({ videos, colorPrimario, eliminarVideo }) => {

    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            effect='fade'
            breakpoints={{
                1024: {
                    slidesPerView: 3
                },
                640: {
                    slidesPerView: 2,
                },
                480: {
                    slidesPerView: 1
                }
            }}
        >
            {
                videos.map((video, index) => {

                    return <SwiperSlide key={index} style={{ width: '120rem' }}>
                        <Card
                            key={index}
                            datos={video}
                            colorPrimario={colorPrimario}
                            eliminarVideo={eliminarVideo}
                        />
                    </SwiperSlide>

                })
            }
            ...
        </Swiper>)

}

export default Slider;

