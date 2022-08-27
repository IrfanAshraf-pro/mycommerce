import React from "react";
import Tabmenu from "../features/tabmenu/Tabmenu";
import "./Arrival.css";
import CarouselProductView from "../features/CarouselProductView/CarouselProductView";
import holdingMobile from "../../images/holding-mobile.jpg";

const Arrival = () => {
	const selectedCategory = (category) => {
		console.log(category);
	};
	return (
		<div className="arrival-container flex-col ">
			<div className="arrival-title container">
				<p>New Arrivals</p>
				<h2>Something new for you</h2>
				<div className="arrival-span-container">
					<span className="span-line"></span>
				</div>
			</div>
			<div className="arrival-body flex-col">
				<div className="arrival-tabmenu container">
					<Tabmenu selectedCategory={selectedCategory} />
				</div>
			</div>
			<div className="arrival-product-view-container container">
				<div className="arrival-carousel-hold">
					<CarouselProductView />
				</div>
				<div className="arrival-product-view-image-container">
					<img
						src={holdingMobile}
						alt="a man holding a phone"
						className="arrival-product-view-image"
					/>
				</div>
			</div>
		</div>
	);
};

export default Arrival;
