import React from "react";

function article_1() {
	return {
		date: "Sep 2023",
		title: "Bengali Document Layout Analysis -- A YOLOV8 Based Ensembling Approach",
		description:
			"This paper focuses on enhancing Bengali Document Layout Analysis (DLA) using the YOLOv8 model and innovative post-processing techniques. We tackle challenges unique to the complex Bengali script by employing data augmentation for model robustness.",
		btn: "Read Draft",
		link: "https://arxiv.org/abs/2309.00848",
		target: "_blank",
		keywords: [
			"Document Laout Analysis",
			"Bengali NLP",
			"Bengali.ai",
			"Saad Noor",
			"YOLOv8",
			"Detectron2",
			"ViT",
			"Computer Vision"
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "Ongoing",
		title: "Classifying Techniques used In Cyber Attack Scenarios",
		description:
			"Countless cyber attacks are happening everyday all around the world and it is impossible for experts to investigate and identify how security is breached in every cases. With that in mind, we are building a dataset with various cyber attack scenarios, where we will identify different Mitre ATT&CK Techniques used throughout a cyber attack.",
		btn: "View More",
		link: "/article/2",
		target: "_self",
		style: ``,
		keywords: [
			"Cybersecurity",
			"Mitre Att&Ck",
			"Techniques",
			"DFIR Reports",
		],
		body: (
			<React.Fragment>
				<h1>Coming Soon!</h1>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "Ongoing",
		title: "CLARA: Code expLainer And Repo Analyzer",
		description:
			"In the age of LLMs, developers often utilize chatGPT, Gemini to usderstand, rewrite and analyze codes. We created a google chrome extention called CLARA that does all of these in one place with the help of our fine-tuned models",
		btn: "View More",
		link: "/article/3",
		target: "_self",
		style: ``,
		keywords: [
			"chrome extention",
			"LLM",
			"ChatGPT",
			"github",
		],
		body: (
			<React.Fragment>
				<h1>Coming Soon!</h1>
			</React.Fragment>
		),
	};
}

function article_4() {
	return {
		date: "Oct, 2023",
		title: "BDEstate: A Dataset of Bangladeshi Property Prices",
		description:
			"In my final semested Machine Learning course, we were tasks to create a dataset and apply various machine learning techniques on it. For that purpose, I created a dataset of Bangladeshi property prices with some rich, novel features.",
		btn: "Read Draft",
		link: "https://drive.google.com/file/d/1dEYF4gbmSM39siYl7j8ZS-6LlHdfqF3m/view",
		style: ``,
		target: "_blank",
		keywords: [
			"Bangladeshi Real-Estate Price",
			"Machine Learning",
			"Decision Tree",
			"Dataset",
		],
		body: (
			<React.Fragment>
				<h1>Coming Soon!</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2, article_3, article_4];

export default myArticles;
