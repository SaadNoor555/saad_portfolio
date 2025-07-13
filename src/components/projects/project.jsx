import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, techs, description, linkText, link, gitLink } = props;

	return (
		<React.Fragment>
			<div className="project">
				
				<div className="project-container">
					<Link to={gitLink} target="_blank">
						<div className="project-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="project-title">{title}</div>
					</Link>
					<div className="project-tools"> {techs}</div>
					<div className="project-description">{description}</div>
					<Link to={link} target="_blank">
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="project-link-text">{linkText}</div>
						</div>
					</Link>
				</div>
				
			</div>
		</React.Fragment>
	);
};

export default Project;
