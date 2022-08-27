import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BiSearch } from "react-icons/bi";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import "./Navbar.css";
import Button from "../features/Button";
import { NavLink } from "react-router-dom";

import { setLogin, setLogOut } from "../../reduxtoolkit/features/authSlice";
import { useDispatch } from "react-redux";

import { auth, Gprovider } from "../../firebase.config";
import { useSelector } from "react-redux";
import { signInWithPopup, signOut } from "@firebase/auth";

import Avatar from "../../images/avtar.png";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [menu, setMenu] = useState(true);
	const dispatch = useDispatch();
	const { loggedIn, user, error } = useSelector((state) => state.auth);

	const SignIn = async () => {
		await signInWithPopup(auth, Gprovider).then((res) => {
			const result = res.user;
			dispatch(
				setLogin({
					user: result.providerData[0],
					error: "",
				})
			);
		});
	};
	const logOut = () => {
		console.log("Inside logout");
		setMenu(false);
		signOut(auth);
		dispatch(setLogOut());
		console.log("dispatched logout");
	};
	useEffect(() => {}, [user]);
	return (
		<nav className="navbar-container">
			<div className="main-menu flex">
				<div className="mobile-cart-icon">
					<div className="navbar-icon flex">
						<MdShoppingBasket fontSize="1.3em" />
					</div>
				</div>
				<div className="navbar-logo flex">
					<NavLink to="/" className={`navbar-link`}>
						MC
					</NavLink>
				</div>

				<div className="navbar-menu-container flex">
					<motion.ul
						initial={{ opacity: 0, x: 200 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 200 }}
						className="navbar-menu flex"
					>
						<li className="navbar-menu-item">
							<NavLink
								to="/"
								className={`navbar-link ${({ isActive }) =>
									isActive ? "active" : "inactive"}`}
							>
								Home
							</NavLink>
						</li>
						<li className="navbar-menu-item">
							<NavLink
								to="/products"
								className={`navbar-link ${({ isActive }) =>
									isActive ? "active" : "inactive"}`}
							>
								Products
							</NavLink>
						</li>
						<li className="navbar-menu-item">
							<NavLink
								to="/about"
								className={`navbar-link ${({ isActive }) =>
									isActive ? "active" : "inactive"}`}
							>
								About us
							</NavLink>
						</li>
						<li className="navbar-menu-item">
							<NavLink
								to="/services"
								className={`navbar-link ${({ isActive }) =>
									isActive ? "active" : "inactive"}`}
							>
								Services
							</NavLink>
						</li>
						<li className="navbar-menu-item">
							<NavLink
								to="/gallery"
								className={`navbar-link ${({ isActive }) =>
									isActive ? "active" : "inactive"}`}
							>
								Gallery
							</NavLink>
						</li>
						<li className="navbar-menu-item">
							{loggedIn ? (
								<div className="avatar-image-div">
									<motion.img
										whileTap={{ scale: 0.6 }}
										src={user ? user.photoURL : Avatar}
										alt="avatar Image"
										className="avatar-img"
										onClick={() => setMenu(!menu)}
									/>
									{menu && (
										<motion.div
											initial={{ opacity: 0, scale: 0.6 }}
											animate={{ opacity: 1, scale: 1 }}
											exit={{ opacity: 0, scale: 0.6 }}
											className="flex-col avatar-menu"
										>
											{user && user.email === "irfanashraf4090@gmail.com" && (
												<NavLink
													to="/createItem"
													className="navbar-link avatar-menu-link"
												>
													<p
														className="avatar-add-item"
														onClick={() => setMenu(false)}
													>
														New Item <MdAdd />
													</p>
												</NavLink>
											)}
											<Button
												className="flex avatar-add-logout"
												onClick={logOut}
											>
												<span>Logout</span> <MdLogout />
											</Button>
										</motion.div>
									)}
								</div>
							) : (
								<Button onClick={SignIn} buttonStyle="btn--primary--solid">
									Login
								</Button>
							)}
						</li>
					</motion.ul>
					<motion.div whileTap={{ scale: 0.6 }} className="navbar-icon flex">
						<MdShoppingBasket fontSize="1.3em" />
					</motion.div>
					<motion.div whileTap={{ scale: 0.6 }} className="navbar-icon flex">
						<BiSearch fontSize="1.3em" />
					</motion.div>
				</div>
				<motion.button
					whileTap={{ scale: 0.6 }}
					id="menu-btn"
					className={`hamburger ${open && "open"}`}
					type="button"
					onClick={() => setOpen(!open)}
				>
					<span className="hamburger-top"></span>
					<span className="hamburger-middle"></span>
					<span className="hamburger-bottom"></span>
				</motion.button>
			</div>
			<div className={`mobile-menu ${open && "open"} flex `}>
				<div className="mobile-menu-container">
					<motion.ul
						transition={{ duration: 1 }}
						initial={{ opacity: 0, scale: 0.6 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.6 }}
						className="navbar-menu navbar-menu-mobile flex-col"
					>
						<li className="navbar-menu-item navbar-menu-item-mobile">
							<NavLink
								to="/"
								className={`navbar-link ${({ isActive }) =>
									isActive ? "active" : "inactive"}`}
							>
								Home
							</NavLink>
						</li>
						<li className="navbar-menu-item navbar-menu-item-mobile">
							<NavLink
								to="/products"
								className={`navbar-link ${({ isActive }) =>
									isActive ? "active" : "inactive"}`}
							>
								Products
							</NavLink>
						</li>
						<li className="navbar-menu-item navbar-menu-item-mobile">
							<NavLink
								to="/about"
								className={`navbar-link ${({ isActive }) =>
									isActive ? "active" : "inactive"}`}
							>
								About us
							</NavLink>
						</li>
						<li className="navbar-menu-item navbar-menu-item-mobile">
							<NavLink
								to="/services"
								className={`navbar-link ${({ isActive }) =>
									isActive ? "active" : "inactive"}`}
							>
								Services
							</NavLink>
						</li>
						<li className="navbar-menu-item navbar-menu-item-mobile">
							<NavLink
								to="/gallery"
								className={`navbar-link ${({ isActive }) =>
									isActive ? "active" : "inactive"}`}
							>
								Gallery
							</NavLink>
						</li>
						<li className="navbar-menu-item navbar-menu-item-mobile">
							<Button
								onClick={SignIn}
								buttonStyle="btn--primary--solid"
								buttonSize="btn--wide"
								className="flex "
							>
								Login
							</Button>
						</li>
					</motion.ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
