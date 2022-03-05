import React from "react";
import i1 from "../assets/mint/i1.svg";
import i2 from "../assets/mint/i2.svg";
import i24 from "../assets/mint/i3.svg";
import i25 from "../assets/mint/i4.svg";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import skeleton from "../assets/skeleton.svg";
import i11 from "../assets/mintCount/i1.svg";
import i12 from "../assets/mintCount/i2.svg";
import i3 from "../assets/mintCount/i3.svg";
import i4 from "../assets/mintCount/i4.svg";
import i5 from "../assets/mintCount/i5.svg";
import mintNow from "../assets/mintNow.png";

const Mint = () => {
	const counter = [i11, i12, i3, i4, i5];

	return (
		<div className="mint_container">
			<div className="inner_mint_container">
				<div className="counter_container d-flex justify-content-center">
					<img className="minus" src={minus} alt="" />
					{counter.map((item, i) => {
						return (
							<div className="single_count">
								<img className="mx-2" key={i} src={item} alt="" />
								<img className="skele" src={skeleton} alt="" />
							</div>
						);
					})}
					<img className="plus" src={plus} alt="" />
				</div>

				<div className="min_btn d-flex flex-column justify-content-center pt-1 pt-sm-5 text-center">
					<p className="mb-1">1,111 / 5,555</p>
					<button>
						<img src={mintNow} alt="" />

						<img className="i24_stone" src={i24} alt="" />
						<img className="i25_stone" src={i25} alt="" />
					</button>
				</div>

				<div className="three_boxes">
					<div className="three_boxes_inner d-flex flex-column flex-md-row px-5 px-md-0">
						<div className="box text-center">
							<h4>
								0.025 ETH <br /> each + gas
							</h4>
						</div>
						<div className="box text-center">
							<h4>
								5,555 <br /> total supply
							</h4>
						</div>
						<div className="box text-center">
							<h4>
								5 NFT <br /> per tx
							</h4>
						</div>
					</div>
				</div>

				<img className="i1_stone" src={i1} alt="" />
				<img className="i2_stone" src={i2} alt="" />
			</div>
		</div>
	);
};

export default Mint;
