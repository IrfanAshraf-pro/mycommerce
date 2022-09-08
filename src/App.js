import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CreateItem from "./components/create/CreateItem";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/pages/HomePage/HomePage";
import { getAllItems } from "./utils/firebaseFunctions";
import { useDispatch } from "react-redux";
import { setItems } from "./reduxtoolkit/features/itemsSlice";
import Products from "./components/pages/Products/Products";
function App() {
	const dispatch = useDispatch();
	const fetchitems = async () => {
		const data = await getAllItems();
		dispatch(setItems(data));
	};
	useEffect(() => {
		fetchitems();
	}, []);
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/createitem" element={<CreateItem />} />
				<Route path="/products" element={<Products />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
