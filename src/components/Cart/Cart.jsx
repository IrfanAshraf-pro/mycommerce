import React, { useEffect, useState } from "react";
import "./Cart.css";
import { BsArrowLeft } from "react-icons/bs";
import { MdOutlineClear } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setCartShow, emptyCart } from "../../reduxtoolkit/features/cartSlice";
import EmptyCart from "../../images/emptyCart.svg";
import CartItem from "../CartItem/CartItem";
import Button from "../features/Button";
import Pagination from "../features/Pagination/Pagination";

const Cart = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [productPerPage] = useState(3);
	const [resetPaginate, setResetpaginate] = useState(false);
	const [list, setList] = useState([]);
	const [flag, setFlag] = useState(true);
	const [tot, setTot] = useState(0);
	const { cart, cartShow } = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const showCart = () => {
		dispatch(
			setCartShow({
				cartShow: !cartShow,
			})
		);
	};
	const clearCart = () => {
		dispatch(emptyCart());
	};
	useEffect(() => {
		cart && setList(cart);
		let totalPrice = cart.reduce(function (accumulator, item) {
			return accumulator + item.qty * item.price;
		}, 0);
		setTot(totalPrice);
	}, [cart, cartShow, tot, flag]);

	const indexOfLastProduct = currentPage * productPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productPerPage;
	const currentProducts = list.slice(indexOfFirstProduct, indexOfLastProduct);

	const paginate = (page) => {
		setCurrentPage(page);
		setResetpaginate(false);
	};
	return (
		<>
			{cartShow && (
				<div className="cart-container ">
					<div className="cart-top">
						<div className="cart-icon" onClick={showCart}>
							<BsArrowLeft fontSize="1.5em" className="cart-back-icon" />
						</div>
						<h2>Cart</h2>
						<div className="cart-clear-button" onClick={clearCart}>
							<p>Clear</p>
							<MdOutlineClear fontSize=".8em" className="cart-clear-icon" />
						</div>
					</div>
					{cart && cart.length > 0 ? (
						<div className="cart-body">
							<div className="cart-body-main ">
								<div className="cart-items-container">
									{currentProducts.map((item, index) => (
										<CartItem
											item={item}
											key={index}
											setFlag={setFlag}
											flag={flag}
										/>
									))}
								</div>
								{cart.length > 2 && (
									<div className="cart-pagination-container">
										<Pagination
											productPerPage={productPerPage}
											totalProducts={list.length}
											paginate={paginate}
											resetPaginate={resetPaginate}
										/>
									</div>
								)}
								<div className="cart-bill-container">
									<div className="subtotal-div">
										<p>Sub Total</p>
										<p>$ {tot}</p>
									</div>
									<div className="cart-delivery-charges">
										<p>Delivery</p>
										<p>$ {25}</p>
									</div>
									<div className="cart-line"></div>
									<div className="cart-total">
										<p>Total</p>
										<p>$ {tot + 25}</p>
									</div>
									<Button>Check Out</Button>
								</div>
							</div>
						</div>
					) : (
						<div className="empty-cart container flex-col">
							<img
								src={EmptyCart}
								alt="empty cart"
								className="empty-cart-img"
							/>
							<p>Add Items to your cart</p>
						</div>
					)}
				</div>
			)}
		</>
	);
};

export default Cart;
