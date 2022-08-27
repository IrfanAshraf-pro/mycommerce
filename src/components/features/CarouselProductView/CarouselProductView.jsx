import React from "react";
import "./CarouselProductView.css";
import SwiperCore, { Scrollbar, A11y, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";

import { sliderData } from "../Carousel/Data";
import CarouselProduct from "./CarouselProduct";

SwiperCore.use([Scrollbar, A11y, EffectFade]);
const CarouselProductView = () => {
	return (
		<div className="product-swiper-container">
			<Swiper
				modules={[Scrollbar, A11y]}
				slidesPerView={1}
				grabCursor={true}
				centeredSlides={true}
				className="product-swiper"
			>
				{sliderData.map((item, index) => (
					<SwiperSlide key={index} className="product-swiper-slide">
						<div className="product-carousel-slide-container">
							<CarouselProduct item={item} />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default CarouselProductView;
