import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="saad_portfolio/" element={<Homepage />} />
				<Route path="saad_portfolio/about" element={<About />} />
				<Route path="saad_portfolio/projects" element={<Projects />} />
				<Route path="saad_portfolio/articles" element={<Articles />} />
				<Route path="saad_portfolio/article/:slug" element={<ReadArticle />} />
				<Route path="saad_portfolio/contact" element={<Contact />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
