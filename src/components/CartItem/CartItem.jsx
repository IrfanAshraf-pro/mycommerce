import React, { useState, useEffect } from "react";
import "./CartItem.css";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { removeItem, setQtys } from "../../reduxtoolkit/features/cartSlice";
const CartItem = ({ item, setFlag, flag }) => {
	const [quty, setQuty] = useState(1);

	const dispatch = useDispatch();
	const increaseQty = () => {
		setQuty((prev) => prev + 1);
	};
	const decreaseQty = () => {
		setQuty((prev) => (prev === 1 ? prev : prev - 1));
	};
	const dispatchQuantity = () => {
		let newItem = { ...item, qty: quty };
		console.log(newItem);
		dispatch(setQtys({ newItem }));
		// setFlag(!flag);
	};
	const removeFromCart = () => {
		dispatch(
			removeItem({
				item,
			})
		);
	};
	useEffect(() => {
		dispatchQuantity();
	}, [quty]);

	return (
		<div className="cart-item-container">
			<img src={item.imageURL} alt="" className="cart-item-image" />
			<div className="cart-item-body">
				<div className="cart-item-desc">
					<h3>{item.name}</h3>
					<p>
						$<span> {item.price}</span>
					</p>
				</div>

				<div className="cart-quantity-container">
					<motion.div whileTap={{ scale: 0.7 }} onClick={increaseQty}>
						<AiOutlinePlus className="flex" fontSize=".8rem" />
					</motion.div>
					<p className="cart-price-item">{quty}</p>
					<motion.div whileTap={{ scale: 0.7 }} onClick={decreaseQty}>
						<AiOutlineMinus className="flex" fontSize=".8rem" />
					</motion.div>
					<motion.div whileTap={{ scale: 0.7 }} onClick={removeFromCart}>
						<AiOutlineClose className="flex" fontSize=".8rem" />
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
