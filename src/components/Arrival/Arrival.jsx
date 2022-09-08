import React, { useState, useEffect } from "react";
import Tabmenu from "../features/tabmenu/Tabmenu";
import "./Arrival.css";
import { useSelector } from "react-redux";
import Loader from "../features/Loader/Loader";
import ArrivalCarousel from "../features/ArrivalCarousel/ArrivalCarousel";

const Arrival = () => {
	const [itemsList, setItemsList] = useState([]);
	const [list, setList] = useState([]);
	const [company, setCompany] = useState("huawei");
	const [isLoading, setIsLoading] = useState(true);

	const { items } = useSelector((state) => state.items);
	const filteringData = () => {
		setList(
			itemsList?.filter((item) => {
				return item.company === company;
			})
		);
		setIsLoading(false);
	};
	const selectedCategory = (category) => {
		setIsLoading(true);
		setCompany(category.toLowerCase());
		filteringData();
	};
	useEffect(() => {
		setItemsList(items);
		items && filteringData();
	}, [company, items, isLoading]);
	// const items = (
	// 	<div className="arrival-product-view-container  flex">
	// 		<div className="arrival-carousel-hold">
	// 			<CarouselProductView />
	// 		</div>
	// 		<div className="arrival-product-image-container">
	// 			<img src={imageHolding} alt="" className="arrival-product-image" />
	// 		</div>
	// 	</div>
	// );

	return (
		<div className="arrival-container flex-col ">
			<div className="arrival-title container ">
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

			{isLoading ? (
				<div className="loader-products-div flex">
					<Loader />
				</div>
			) : (
				<div className="container">
					{isLoading ? <Loader /> : <ArrivalCarousel list={list} />}
				</div>
			)}
		</div>
	);
};

export default Arrival;
