import React from "react";
import "./CarouselItem.css";

const CarouselItem = ({ item }) => {
	return (
		<div className="carousel-item-container flex-col">
			<div className="carousel-item-image-container flex">
				<img src={item.img} alt="" className="carousel-item-img" />
			</div>
			<div className="carousel-item-body">
				<h1>{item.name}</h1>
				<p>
					Price : <span>{item.price}$</span>
				</p>
			</div>
		</div>
	);
};

export default CarouselItem;
