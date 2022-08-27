import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './reduxtoolkit/app/store'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode >
		<Provider store={store}>
		<Router>
			<AnimatePresence >
				<App />
			</AnimatePresence>
			</Router>
			</Provider>
	</React.StrictMode>
);
