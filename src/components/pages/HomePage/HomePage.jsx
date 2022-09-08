import React from "react";
import Carousel from "../../features/Carousel/Carousel";
import Button from "../../features/Button";
import Arrival from "../../Arrival/Arrival";
import "./Homepage.css";

import parallaxRight from "../../../images/parallax_image.png";
import ProductCard from "../../features/ProductCard/ProductCard";

const HomePage = () => {
	return (
		<>
			<Carousel />

			<main>
				<section className="container flex hero-container">
					<div className="left-hero-container">
						<div className="dark-filter  left-child-inner-container flex">
							<div className="flex-col left-inner-child container">
								<h2>The Perfectionist</h2>
								<div className="hero-span-container">
									<span className="span-line"></span>
								</div>
								<p>
									We bring the best qualith available for you around the world.
									We believe in quality over the quantity.
								</p>
								<Button buttonSize="btn--medium">Learn More</Button>
							</div>
						</div>
					</div>
					<div className="right-hero-container flex-col">
						<div className="hero-right-children hero-right-children-div-top ">
							<div className="dark-filter flex-col right-children-inner-container">
								<p>Talk Time</p>
								<h3>Phones with best talktime</h3>
								<p>
									Starting from <span>$150.00</span>
								</p>
							</div>
						</div>

						<div className="hero-right-children hero-right-children-div-bottom ">
							<div className="dark-filter flex-col right-children-inner-container">
								<p>Gaming Experience</p>
								<h3>The Best Gaming Experience</h3>
								<p>
									Starting from <span>$500.00</span>
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="arrival-section-container">
					<Arrival />
				</section>
				<section className="parallax-container">
					<div className="parallax-gradient-container">
						<div className="parallax-inner-container flex">
							<div className="parallax-left">
								<h2>The Best Choice ever</h2>
								<div className="parallax-span-container">
									<span className="parallax-span-line"></span>
								</div>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Excepturi, enim! Fuga nihil, incidunt veritatis nemo quo alias
									assumenda quas laboriosam ipsum minus rem ullam.
								</p>
								<div className="parallax-btn-container">
									<Button
										buttonSize="btn--medium"
										buttonStyle="btn--white--solid"
									>
										Learn More
									</Button>
								</div>
							</div>
							<div className="parallax-right">
								<img
									src={parallaxRight}
									alt="person holding a phone"
									className="parallax-image"
								/>
							</div>
						</div>
					</div>
				</section>
				<section className="product-card-container">
					<ProductCard />
				</section>
			</main>
		</>
	);
};

export default HomePage;
