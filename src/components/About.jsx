import React from "react";
import aboutImg from "../assets/aboutImg.svg";
import about from "../assets/about.png";

const About = () => {
	return (
		<div className="about_container">
			<div className="inner_about_container">
				<div className="container-fluid">
					<div className="row gx-4">
						<div className="col_6 col_6_first col-6 position-relative d-none d-lg-block">
							<div className="position-absolute pe-2">
								{[1, 1].map(() => {
									return <img className="w-100" src={aboutImg} alt="" />;
								})}
							</div>
						</div>
						<div className="col_6 col_6_second col-12 col-lg-6 self-align-center position-relative">
							<img className="about_logo w-100" src={about} alt="" />

							<div className="d-flex flex-column align-items-center justify-content-center h-100">
								<div className="res_elem"></div>
								<p className="mb-0 text-center box bg-white p-4">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
									non nisl efficitur, porta ligula eget, auctor ex. Pellentesque
									molestie interdum vestibulum. Vestibulum quam tellus, commodo
									ac vestibulum eget, ullamcorper id erat. Aenean aliquet ante
									vel dictum finibus. Suspendisse interdum arcu sit amet arcu
									sodales, eu pellentesque purus elementum. Sed non sapien sit
									amet dui consectetur dictum ut nec nibh. Fusce auctor ipsum
									urna, ut facilisis mi mattis vel. Integer sed suscipit augue,
									vel porttitor purus. Sed a erat ac mi accumsan elementum ac eu
									justo.
									<br />
									<br />
									Integer consequat turpis magna, nec ullamcorper tortor
									volutpat sit amet. Etiam molestie justo at diam bibendum, a
									interdum purus laoreet. Curabitur a massa cursus, rutrum erat
									ac, dapibus felis. Donec et mattis nulla. Curabitur ac libero
									placerat, eleifend dui eget, ultricies diam. Etiam auctor
									ipsum tellus, eget fermentum massa vulputate ac. Morbi rhoncus
									vitae metus nec scelerisque.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
