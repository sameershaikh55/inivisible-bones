import React from "react";
import boat from "../assets/socails/boat.svg";
import build from "../assets/socails/build.svg";
import discord from "../assets/socails/discord.svg";
import insta from "../assets/socails/insta.svg";
import twitter from "../assets/socails/twitter.svg";

const Socials = () => {
	const socials = [
		{ image: insta, link: "" },
		{ image: boat, link: "" },
		{ image: twitter, link: "" },
		{ image: discord, link: "" },
		{ image: build, link: "" },
	];

	return (
		<div className="social_links d-flex align-items-center">
			{socials.map((item, i) => {
				return (
					<a key={i} href={item.link}>
						<img src={item.image} alt="" />
					</a>
				);
			})}
		</div>
	);
};

export default Socials;
