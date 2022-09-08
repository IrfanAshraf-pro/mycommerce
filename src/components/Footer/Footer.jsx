import React from "react";
import Button from "../features/Button";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer-container">
			<div className="footer-inner">
				<div className="footer-top">
					<h2>Enjoy Shopping Here!</h2>
					<p>
						Sign up to get latest collections, exclusive offers & get 10% Off
					</p>
					<div className="footer-email-container">
						<input
							type="email"
							className="footer-input"
							placeholder="Enter your email"
						/>
						<Button>SIGN UP</Button>
					</div>
				</div>
				<div className="footer-middle">
					<h2>Need Help?</h2>
					<div className="footer-buttons-container">
						<div className="footer-button">
							<Button>LOGIN</Button>
						</div>
						<div className="footer-button">
							<Button>CONTACT</Button>
						</div>
						<div className="footer-button">
							<Button>PRODUCTS</Button>
						</div>
						<div className="footer-button">
							<Button>RETURN AND REFUND POLICY</Button>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					<h2>More Info</h2>
					<div className="footer-info-container">
						<div className="info-top">
							<p>About</p>
							<p>Profile</p>
							<p>Blog</p>
							<p>Preferences</p>
						</div>
						<div className="info-middle">
							<p>Terms</p>
							<p>Privacy</p>
							<p>Purchase</p>
						</div>
						<div className="info-bottom">
							<p>Information</p>
							<p>Credits</p>
							<p>Affiliates</p>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-rights-container">
				&copy; All Rights Reserved. Developed by Irfan Ashraf
			</div>
		</footer>
	);
};

export default Footer;
