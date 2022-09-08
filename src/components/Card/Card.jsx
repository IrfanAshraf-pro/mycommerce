import React from "react";
import "./Card.css";
import Button from "../features/Button";
import { MdShoppingBasket } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setCart } from "../../reduxtoolkit/features/cartSlice";
const Card = ({ item }) => {
	const dispatch = useDispatch();
	const addToCart = () => {
		dispatch(
			setCart({
				item,
			})
		);
	};
	return (
		<div className="card-container">
			<div className="card-title">
				<p>{item.company}</p>
				<h2>{item.name}</h2>
			</div>
			<div className="card-body flex">
				<img src={item.imageURL} alt="" className="card-image" />
				<div className="flex preview-buttons">
					<div className="preview-buttons-content flex-col">
						<div className="preview-top">
							<Button buttonSize="btn--medium">Learn More</Button>
						</div>
						<div className="preview-bottom">
							<Button onClick={addToCart} buttonSize="btn--medium">
								Add To Cart
							</Button>
						</div>
					</div>
				</div>
			</div>

			<div className="card-bottom">
				<h4 className="card-price">${item.price}</h4>

				<div className="icons">
					<MdShoppingBasket onClick={addToCart} className="card-icons" />
				</div>
			</div>
		</div>
	);
};

export default Card;
