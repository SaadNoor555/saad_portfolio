import React from "react";
import { Link } from "react-router-dom";

import INFO from "../../data/user";

import "./styles/logo.css";

const Logo = (props) => {
	let { width, link } = props;

	if (link === undefined) {
		link = true;
	}

	const imageElement = (
		<img src="https://saadnoor555.github.io/saad_portfolio/saad_1.jpg" alt="logo" className="logo" width={width} />
	);

	return (
		<React.Fragment>
			{link ? <Link to="/saad_portfolio/">{imageElement}</Link> : imageElement}
		</React.Fragment>
	);
};

export default Logo;
