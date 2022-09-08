import React from "react";
import "./Carousel.css";
import SwiperCore, {
	Pagination,
	Scrollbar,
	A11y,
	EffectFade,
	Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { sliderData } from "./Data";
import CarouselItem from "./CarouselItem/CarouselItem";

SwiperCore.use([Pagination, Scrollbar, A11y, EffectFade, Autoplay]);
const Carousel = () => {
	return (
		<div className="swiper-container">
			<Swiper
				modules={[Pagination, Scrollbar, A11y, Autoplay]}
				slidesPerView={1}
				grabCursor={true}
				centeredSlides={true}
				pagination={{ clickable: true }}
				// onSwiper={(swiper) => console.log(swiper)}
				// onSlideChange={() => console.log("slide change")}
				autoplay={{ delay: 3000 }}
				className="carousel-swipper-wrapper"
			>
				{sliderData.map((item) => (
					<SwiperSlide key={item.id}>
						<div className="carousel-img-container flex">
							<CarouselItem item={item} />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Carousel;
