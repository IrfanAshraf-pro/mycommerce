import React from "react";
import "./Button.css";

const STYLES = [
	"btn--primary--solid",
	"btn--warning--solid",
	"btn--danger--solid",
	"btn--success--solid",
	"btn--white--solid",
	"btn--primary--outline",
	"btn--warning--outline",
	"btn--danger--outline",
	"btn--success--outline",
	"btn--primary--square",
	"btn--primary--square--dark",
];

const SIZES = [
	"btn--small",
	"btn--medium",
	"btn--large",
	"btn--wide",
	"btn--carousel",
	"btn--carousel--hover",
];

const Button = ({
	children,
	type,
	onClick,
	buttonStyle,
	buttonSize,
	value,
}) => {
	const checkButtonStyles = STYLES.includes(buttonStyle)
		? buttonStyle
		: STYLES[0];
	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
	return (
		<button
			className={`btn ${checkButtonStyles} ${checkButtonSize}`}
			onClick={onClick}
			type={type}
			value={value}
		>
			{children}
		</button>
	);
};

export default Button;
