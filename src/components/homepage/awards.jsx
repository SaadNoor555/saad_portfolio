import React from "react";
import { faAward } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";
import { Link } from "react-router-dom";

const Awards = () => {
	return (
		<div className="works">
			<Card
				icon={faAward}
				title="Awards"
				body={
					<div className="works-body">
                        <Link to="https://www.kaggle.com/competitions/dlsprint2/discussion/433389" target="_blank" style={{ textDecoration: "none" }}>
                            <div className="work">
                                <img
                                    src="./dl_sprint2.0.png"
                                    alt="DLSprint 2.0"
                                    className="work-image"
                                />
                                <div className="work-title">DL Sprint 2.0</div>
                                <div className="work-subtitle">
                                    Runner Up
                                </div>
                                <div className="work-duration">Sep, 2023</div>
                            </div>
                        </Link>
                        <Link to="https://www.linkedin.com/posts/saad-sakib-noor-282098234_robidatathon3-datascience-innovation-activity-7204932344275701761-XdLH/" target="_blank" style={{ textDecoration: "none" }}>
                            <div className="work">
                                <img
                                    src="./robi_datathon.jpg"
                                    alt="Robi Datathon 3.0"
                                    className="work-image"
                                />
                                <div className="work-title">Robi Datathon 3.0</div>
                                <div className="work-subtitle">
                                    Top 10
                                </div>
                                <div className="work-duration">July, 2024</div>
                            </div>
                        </Link>
                        <Link to="https://drive.google.com/file/d/11a4wtMAojkSPoflWRkmIfV3gH3GLufCY/view" target="_blank" style={{ textDecoration: "none" }}>
                            <div className="work">
                                <img
                                    src="./pki.jpg"
                                    alt="PKI Contest"
                                    className="work-image"
                                />
                                <div className="work-title">PKI Contest</div>
                                <div className="work-subtitle">
                                    3rd Overall, 2nd Student Category
                                </div>
                                <div className="work-duration">Dec, 2022</div>
                            </div>
                        </Link>

                        <Link to="https://drive.google.com/file/d/1OhhLOy15c2ZK-0HO-stgpcs2zX-i7x2z/view" target="_blank" style={{ textDecoration: "none" }}>
                            <div className="work">
                                <img
                                    src="./itverse.jpg"
                                    alt="LEADS"
                                    className="work-image"
                                />
                                <div className="work-title">Code Odessy: Code Refactoring Competition</div>
                                <div className="work-subtitle">
                                    Runner Up
                                </div>
                                <div className="work-duration">Dec, 2022</div>
                            </div>
                        </Link>
					</div>
				}
			/>
		</div>
	);
};

export default Awards;
