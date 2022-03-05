import React from "react";
import hero from "../assets/hero.svg";

const Hero = () => {
	return (
		<div className="hero_container">
			<img className="w-100" src={hero} alt="" />
		</div>
	);
};

export default Hero;
