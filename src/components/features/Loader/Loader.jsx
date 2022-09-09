import React from "react";
import loader from "../../../images/loader.gif";

const Loader = () => {
	return (
		<div className="loader-container flex">
			<img src={loader} className="loader-image" alt="loader" />
		</div>
	);
};

export default Loader;
