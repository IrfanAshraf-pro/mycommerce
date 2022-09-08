import React, { useEffect } from "react";
import "./Pagination.css";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { useState } from "react";

const Pagination = ({
	productPerPage,
	totalProducts,
	paginate,
	resetPaginate,
}) => {
	const [currentPage, setCurrentPage] = useState(1);
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
		pageNumbers.push(i);
	}
	const leftIconsClick = () => {
		if (currentPage !== 1) {
			setCurrentPage(currentPage - 1);
			paginate(currentPage - 1);
		}
	};
	const rightIconsClick = () => {
		if (currentPage !== pageNumbers[pageNumbers.length - 1]) {
			setCurrentPage(currentPage + 1);
			paginate(currentPage + 1);
		}
	};
	useEffect(() => {
		resetPaginate && setCurrentPage(1);
	}, [currentPage, resetPaginate]);
	return (
		<div className="pagination-container">
			<ul className="pagination-list">
				<li className="pagination-icons flex">
					<AiOutlineDoubleLeft
						onClick={leftIconsClick}
						className="pagination-icon"
					/>
				</li>
				{pageNumbers.map((page) => (
					<li
						key={page}
						className={`pagination-item ${
							page === currentPage ? "active-pagination-item" : ""
						}`}
					>
						<span
							className="pagination-item-span"
							onClick={() => {
								setCurrentPage(page);
								paginate(page);
							}}
						>
							{page}
						</span>
					</li>
				))}
				<li className="pagination-icons flex">
					<AiOutlineDoubleRight
						onClick={rightIconsClick}
						className="pagination-icon"
					/>
				</li>
			</ul>
		</div>
	);
};

export default Pagination;
