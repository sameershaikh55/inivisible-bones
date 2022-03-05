import React from "react";
import faq from "../assets/faq.png";
import faq2 from "../assets/faq.svg";

const Faq = () => {
	return (
		<div className="faq_container">
			<div className="inner_faq_container">
				<div className="container-fluid">
					<img className="w-100" src={faq2} alt="" />
					<br />
					{[1, 1, 1, 1].map((item, i) => {
						return (
							<div key={i} className="box mt-4">
								<div className="question">
									Question Lorem Ipsum QuestionQuestion Lorem Ipsum
									QuestionQuestion Lorem Ipsum QuestionQuestion Lorem Ipsum
									Question
								</div>
								<div className="answer">
									Answer, answer, answer here is the answer, the answer.
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Faq;
