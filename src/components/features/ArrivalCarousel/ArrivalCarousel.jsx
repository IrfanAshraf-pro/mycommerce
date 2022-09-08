import React from "react";

import "./ArrivalCarousel.css";

import SwiperCore, { Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Card from "../../Card/Card";
import { useEffect } from "react";
import { useState } from "react";

SwiperCore.use([Pagination, Scrollbar, A11y]);

const ArrivalCarousel = ({ list }) => {
	const [slides, setSlides] = useState(4);

	const handleResize = () => {
		if (window.innerWidth >= 1100) {
			setSlides(4);
		} else if (window.innerWidth >= 850 && window.innerWidth < 1100) {
			setSlides(3);
		} else if (window.innerWidth < 850 && window.innerWidth > 550) {
			setSlides(2);
		} else if (window.innerWidth <= 550) {
			setSlides(1);
		}
	};
	useEffect(() => {
		window.addEventListener("resize", handleResize);
		handleResize();
	}, [list, slides]);
	return (
		<div>
			<Swiper
				modules={[Pagination, Scrollbar, A11y]}
				slidesPerView={slides}
				grabCursor={true}
				centeredSlides={true}
				pagination={{ clickable: true }}
				className=""
				spaceBetween={30}
			>
				{list?.map((item) => (
					<SwiperSlide key={item.id}>
						<div className="arrival-carousel-container">
							<Card item={item} />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default ArrivalCarousel;
