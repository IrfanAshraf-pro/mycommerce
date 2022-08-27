import React from "react";
import "./CarouselProduct.css";
import Button from "../Button";
import { AiFillEye, AiOutlineHeart } from "react-icons/ai";

const CarouselProduct = ({ item }) => {
	return (
		<div className="product-carousel-item-container flex-col">
			<div className="product-carousel-item-image-container flex">
				<img src={item.img} alt="" className="product-carousel-item-img" />
			</div>
			<div className="product-carousel-item-body">
				<h1 className="product-carousel-title">{item.name}</h1>
				<p className="product-carousel-desc">{item.desc}</p>

				<p className="product-carousel-price">
					Price : <span className="product-price">{item.price}$</span>
				</p>
				<div className="product-carousel-hover-content">
					<div className="product-carousel-icons">
						<AiFillEye className="product-carousel-icon" />
						<AiOutlineHeart className="product-carousel-icon" />
					</div>

					<div className="product-carousel-buttons-container flex">
						<Button
							buttonSize="btn--carousel--hover"
							buttonStyle="btn--primary--square--dark"
						>
							Learn more
						</Button>
						<Button
							buttonSize="btn--carousel--hover"
							buttonStyle="btn--primary--square"
						>
							Add To Cart
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CarouselProduct;
