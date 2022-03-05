import React from "react";

// IMAGES
import logo from "../assets/logo.png";
import i1 from "../assets/heroStones/i1.svg";
import i2 from "../assets/heroStones/i2.svg";
import i3 from "../assets/heroStones/i3.svg";
import i4 from "../assets/heroStones/i4.svg";
import i5 from "../assets/heroStones/i5.svg";
import characters from "../assets/characters.svg";

// COMPONENTS
import Socials from "./Socials";

const Hero = () => {
	return (
		<>
			<div className="hero_container">
				<Socials />

				<div className="logo_container">
					<img src={logo} alt="" />

					{/* STONES */}
					<img className="i4_stone" src={i4} alt="" />
					<img className="i5_stone" src={i5} alt="" />
				</div>

				{/* STONES */}
				<img className="i1_stone" src={i1} alt="" />
				<img className="i2_stone" src={i2} alt="" />
				<img className="i3_stone" src={i3} alt="" />
			</div>

			<div className="characters">
				<img src={characters} alt="" />
			</div>
		</>
	);
};

export default Hero;
