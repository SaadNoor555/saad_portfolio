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
								src="./samsung.png"
								alt="samsung"
								className="work-image"
							/>
							<div className="work-title">Samsung R&D Institute Bangladesh</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">Dec, 2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="./leads.jpg"
								alt="LEADS"
								className="work-image"
							/>
							<div className="work-title">LEADS Corporation Ltd.</div>
							<div className="work-subtitle">
								Software Engineering Intern
							</div>
							<div className="work-duration">Dec, 2022 - May, 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
