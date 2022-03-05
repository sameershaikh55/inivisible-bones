import React from "react";
import i1 from "../assets/roadmap/i1.svg";
import i2 from "../assets/roadmap/i2.svg";
import i3 from "../assets/roadmap/i3.svg";
import i4 from "../assets/roadmap/i4.svg";

const Roadmap = () => {
	return (
		<div className="roadmap_container">
			<div className="inner_roadmap_container">
				<div className="container-fluid">
					<div className="row align-items-center">
						{/* FIRST */}
						<div className="col-10">
							<div className="row align-items-center">
								<div className="col-5">
									<img className="w-100" src={i1} alt="" />
									<h1>10%</h1>
								</div>
								<div className="col-7">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
									non nisl efficitur, porta ligula eget, auctor ex. Pellentesque
									molestie interdum vestibulum. Vestibulum quam tellus, commodo
									ac vestibulum eget, ullamcorper id erat
								</div>
							</div>
						</div>

						{/* SECOND */}
						<div className="col-10 ms-auto">
							<div className="row align-items-center">
								<div className="col-7 text-end">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
									non nisl efficitur, porta ligula eget, auctor ex. Pellentesque
									molestie interdum vestibulum. Vestibulum quam tellus, commodo
									ac vestibulum eget, ullamcorper id erat
								</div>
								<div className="col-5">
									<img className="w-100" src={i2} alt="" />
									<h1 style={{ left: "48%" }}>25%</h1>
								</div>
							</div>
						</div>

						{/* THIRD */}
						<div className="col-10">
							<div className="row align-items-center">
								<div className="col-5">
									<img className="w-100" src={i3} alt="" />
									<h1 style={{ left: "55%" }}>50%</h1>
								</div>
								<div className="col-7">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
									non nisl efficitur, porta ligula eget, auctor ex. Pellentesque
									molestie interdum vestibulum. Vestibulum quam tellus, commodo
									ac vestibulum eget, ullamcorper id erat
								</div>
							</div>
						</div>

						{/* FOURTH */}
						<div className="col-10 ms-auto">
							<div className="row align-items-center">
								<div className="col-7 text-end">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
									non nisl efficitur, porta ligula eget, auctor ex. Pellentesque
									molestie interdum vestibulum. Vestibulum quam tellus, commodo
									ac vestibulum eget, ullamcorper id erat
								</div>
								<div className="col-5">
									<img className="w-100" src={i4} alt="" />
									<h1 style={{ left: "52%" }}>75%</h1>
								</div>
							</div>
						</div>

						{/* FOURTH */}
						<div className="col-10">
							<div className="row align-items-center">
								<div className="col-5">
									<img className="w-100" src={i4} alt="" />
									<h1 style={{ left: "52%" }}>100%</h1>
								</div>
								<div className="col-7">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
									non nisl efficitur, porta ligula eget, auctor ex. Pellentesque
									molestie interdum vestibulum. Vestibulum quam tellus, commodo
									ac vestibulum eget, ullamcorper id erat
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Roadmap;
