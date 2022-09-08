import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Loader from "../Loader/Loader";
import Card from "../../Card/Card";
import "./ProductCard.css";

const ProductCard = () => {
	const [item, setItem] = useState([]);
	const { items } = useSelector((state) => state.items);

	useEffect(() => {
		if (items) {
			setItem(items.slice(0, 4));
		}
	}, [items]);

	return (
		<div className="product-card-container  container">
			<div className="product-card-title  flex-col ">
				<p>Best sellers</p>
				<h2>Recommended By People</h2>
				<div className="product-card-span-container">
					<span className="span-line"></span>
				</div>
			</div>

			{item.length > 0 ? (
				<div className="product-card-body">
					{item.map((item, index) => {
						return <Card item={item} key={index} />;
					})}
				</div>
			) : (
				<>
					<div className="loader-product-card-div flex">
						<Loader />
					</div>
				</>
			)}
		</div>
	);
};

export default ProductCard;
