import React from "react";
import About from "../components/About";
import Display from "../components/Display";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Mint from "../components/Mint";
import Roadmap from "../components/Roadmap";

const Home = () => {
	return (
		<>
			<Hero />
			<Mint />
			<About />
			<Display />
			<Roadmap />
			<Faq />
			<Footer />
		</>
	);
};

export default Home;
