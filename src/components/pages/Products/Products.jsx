import React, { useState, useEffect } from "react";
import "./Products.css";
import Tabmenu from "../../features/tabmenu/Tabmenu";
import { useSelector } from "react-redux";
import Card from "../../Card/Card";
import Loader from "../../features/Loader/Loader";
import Button from "../../features/Button";
import Pagination from "../../features/Pagination/Pagination";

const Products = () => {
	const [minrange, setMinRange] = useState(0);
	const [maxrange, setMaxRange] = useState(3500);
	const [isLoading, setIsLoading] = useState(true);
	const [itemsList, setItemsList] = useState([]);
	const [list, setList] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [productPerPage] = useState(10);
	const [resetPaginate, setResetpaginate] = useState(false);
	const companies = ["Huawei", "Apple", "Samsung", "Oppo", "Infinix"];
	// const os = ["IOS", "ANDROID", "WINDOWS"];

	const { items } = useSelector((state) => state.items);
	const selectedCategory = (category) => {
		setIsLoading(true);
		filteringData(category.toLowerCase());
	};
	const filteringData = (category) => {
		setList(
			itemsList.filter((item) => {
				return item.company === category;
			})
		);
		setIsLoading(false);
		setCurrentPage(1);
		setResetpaginate(true);
	};

	const handleRangeSearch = () => {
		console.log(minrange, " min range");
		console.log(maxrange, " max range");

		setList(
			itemsList.filter((item) => {
				return +item.price >= minrange && +item.price <= maxrange;
			})
		);
		setCurrentPage(1);
		setResetpaginate(true);
	};

	useEffect(() => {
		items && setItemsList(items);
		items && setList(items);
		items && setIsLoading(false);
	}, [items, isLoading]);

	const indexOfLastProduct = currentPage * productPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productPerPage;
	const currentProducts = list.slice(indexOfFirstProduct, indexOfLastProduct);

	const paginate = (page) => {
		setCurrentPage(page);
		setResetpaginate(false);
	};
	return (
		<>
			<div className="products-container">
				<div className="products-top">
					<h1>
						The Best Place To Buy <br />
						Latest Mobiles
					</h1>
					<p>quality services ensured</p>
				</div>
				<div className="products-main-container ">
					<div className="products-left">
						<div className="products-company-cotainer">
							<h3>Companies</h3>
							<Tabmenu
								selectedCategory={selectedCategory}
								isFlex={true}
								list={companies}
							/>

							<div className="line-bottom"></div>
						</div>
						<div className="products-range-container">
							<h3>Price</h3>
							<div className="slider-parent">
								<input
									type="range"
									min="0"
									max="1000"
									className="slider-input"
									value={minrange}
									onChange={({ target: { value: radius } }) => {
										setMinRange(radius);
									}}
								/>
								<input
									type="range"
									min="1001"
									max="10000"
									className="slider-input"
									value={maxrange}
									onChange={({ target: { value: radius } }) => {
										setMaxRange(radius);
									}}
								/>
								<div className="buble">
									{minrange} - {maxrange}
								</div>
								<div className="range-button">
									<Button onClick={handleRangeSearch} buttonSize="btn--medium">
										Search
									</Button>
								</div>
							</div>
							<div className="line-bottom range-line-bottom"></div>
						</div>
						{/* <div className="products-os-container">
							<h3>Operating System</h3>
							<Tabmenu
								selectedCategory={selectedCategory}
								isFlex={true}
								list={os}
							/>
							<div className="line-bottom"></div>
						</div> */}
					</div>
					<div className="products-right">
						<h2 className="products-right-title">Products</h2>
						{isLoading ? (
							<div className="loader-products-div flex">
								<Loader />
							</div>
						) : (
							<div className="products-right-grid-container">
								{currentProducts.map((item, index) => {
									return <Card item={item} key={index} />;
								})}
							</div>
						)}
						<div className="pagination">
							<Pagination
								productPerPage={productPerPage}
								totalProducts={list.length}
								paginate={paginate}
								resetPaginate={resetPaginate}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Products;
