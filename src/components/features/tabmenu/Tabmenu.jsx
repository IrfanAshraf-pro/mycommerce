import React, { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { motion } from "framer-motion";
import "./tabmenu.css";

const Tabmenu = ({ selectedCategory, isFlex, list }) => {
	const [selected, setSelected] = useState("Please select a category");
	const [isOpen, setIsOpen] = useState(false);
	const categories = list || ["Huawei", "Apple", "Samsung", "Oppo", "Infinix"];
	return (
		<div className="tabmenu-container">
			<div className="tabmenu-desktop">
				<motion.ul
					initial={{ opacity: 0, x: 200 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: 200 }}
					className={`${
						isFlex ? "products-tabmenu flex-col" : " flex tabmenu-menu-desktop "
					}`}
				>
					{categories.map((item, index) => (
						<motion.li
							whileTap={{ scale: 0.8 }}
							key={index}
							onClick={() => {
								setSelected(item);
								setIsOpen(!isOpen);
								selectedCategory(item);
							}}
							className={`${
								isFlex ? "products-item-desktop" : "tabmenu-item-desktop"
							} ${selected === item && "active-desktop"}`}
						>
							{item}
						</motion.li>
					))}
				</motion.ul>
			</div>
			<div className="tabmenu-mobile">
				<div className="tabmenu-title flex" onClick={() => setIsOpen(!isOpen)}>
					<p className="tabmenu-category-display">{selected}</p>
					{isOpen ? (
						<AiOutlineArrowUp className="tabmenu-icon" />
					) : (
						<AiOutlineArrowDown className="tabmenu-icon" />
					)}
				</div>
				{isOpen && (
					<motion.ul
						initial={{ opacity: 0, x: 200 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 200 }}
						className="tabmenu-menu"
					>
						{categories.map((item, index) => (
							<motion.li
								whileTap={{ scale: 0.8 }}
								key={index}
								onClick={() => {
									setSelected(item);
									setIsOpen(!isOpen);
									selectedCategory(item);
								}}
								className={`tabmenu-item ${selected === item && "active"}`}
							>
								{item}
							</motion.li>
						))}
					</motion.ul>
				)}
			</div>
		</div>
	);
};

export default Tabmenu;
