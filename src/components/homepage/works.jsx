import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./kohortpay_logo.jpg"
								alt=""
								className="work-image"
							/>
							<div className="work-title">KohortPay</div>
							<div className="work-subtitle">
								Full Stack Engineer
							</div>
							<div className="work-duration">Sep 2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="./bevinzey_logo.jpg"
								alt=""
								className="work-image"
							/>
							<div className="work-title">Bevinzey</div>
							<div className="work-subtitle">
								AI & Full Stack Engineer
							</div>
							<div className="work-duration">Jun 2023 - Aug 2023</div>
						</div>

						<div className="work">
							<img
								src="./binko_logo.jpg"
								alt=""
								className="work-image"
							/>
							<div className="work-title">Binko</div>
							<div className="work-subtitle">
								Full Stack Engineer
							</div>
							<div className="work-duration">Jan 2023 - Jun 2023</div>
						</div>

						<div className="work">
							<img
								src="./sponsio_logo.jpg"
								alt=""
								className="work-image"
							/>
							<div className="work-title">Sponsio®</div>
							<div className="work-subtitle">
								Web & Blockchain Engineer
							</div>
							<div className="work-duration">Jan 2022 - Feb 2023</div>
						</div>

						<div className="work">
							<img
								src="./bigbang_logo.jpg"
								alt=""
								className="work-image"
							/>
							<div className="work-title">BIGBANG ITS</div>
							<div className="work-subtitle">
								Head of Software Engineering
							</div>
							<div className="work-duration">Jan 2020 - Sep 2022</div>
						</div>

						<div className="work">
							<img
								src="./freelancer_logo.jpg"
								alt=""
								className="work-image"
							/>
							<div className="work-title">Freelancer.com</div>
							<div className="work-subtitle">
								Blockchain & ML Engineer
							</div>
							<div className="work-duration">Jan 2019 - Sep 2022</div>
						</div>

						<div className="work">
							<img
								src="./cit_inpt_logo.jpg"
								alt=""
								className="work-image"
							/>
							<div className="work-title">Namitech Srl</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">Jun 2022 - Aug 2022</div>
						</div>

						<div className="work">
							<img
								src="./club_logo.jpg"
								alt=""
								className="work-image"
							/>
							<div className="work-title">Club Member</div>
							<div className="work-subtitle">
								A2S Junior Entreprise
							</div>
							<div className="work-duration">Sep 2020 - Jun 2022</div>
						</div>

					</div>
				}
			/>
		</div>
	);
};

export default Works;
