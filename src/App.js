import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import CreateItem from "./components/create/CreateItem";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/pages/HomePage/HomePage";
import { getAllItems } from "./utils/firebaseFunctions";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "./reduxtoolkit/features/itemsSlice";
import Products from "./components/pages/Products/Products";
function App() {
	const { user } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const fetchitems = async () => {
		const data = await getAllItems();
		dispatch(setItems(data));
	};
	useEffect(() => {
		fetchitems();
	}, []);

	function RequireAuth({ children }) {
		const authed = user.email.localeCompare("irfanashraf4090@gmail.com")
			? true
			: false;

		return authed ? children : <Navigate to="/" replace />;
	}
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route
					path="/createitem"
					element={
						<RequireAuth>
							<CreateItem />
						</RequireAuth>
					}
				/>
				<Route path="/products" element={<Products />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
