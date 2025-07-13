const INFO = {
	main: {
		title: "Saad Sakib Noor's Portfolio",
		name: "Saad Sakib Noor",
		email: "ssaadn.555@gmail.com",
		logo: "../saad_1.jpg",
	},

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/SaadNoor555",
		linkedin: "https://www.linkedin.com/in/saad-sakib-noor-282098234/",
		instagram: "https://instagram.com/unrealangaroo",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
		huggingface: "https://huggingface.co/qoobeeshy"
	},

	homepage: {
		title: "Saad Sakib Noor",
		description:
			"Hello! I am Saad, a software engineer with particular interest in NLP, Computer Vision and Security. I currently work as a software engineer at Samsung R&D Institute Bangladesh.",
	},

	about: {
		title: `Hi! I’m Saad. I am a Software Engineer at Samsung R&D Institute Bangladesh`,
		description:
			`My hobbies include sports, videogames, and playing around with different deeplearning models. \
			I love to work on new projects and learn the latest innovations in the world of NLP and Computer Vision.\
			I aim to innovate new solutions using these technologies that would improve lives of everyone, specially the people with special needs.\
			My research interests include NLP, Computer Vision and their usecases in Software Engineering, Security & Privacy, Accessibility, etc.`,
	},

	articles: {
		title: "I'm passionate about innovating new solutions to solve our day-to-day problems",
		description:
			"Since starting my undergraduate studies in 2019, I have worked on various research projects accross wide range of domains. Among those, LLMs and VLMs for security and accessibility has attracted me the most. Here are some of my project works.",
	},

	projects: [
		{
			title: "Bengali Document Layout Segmentation",
			techs: "Python, YOLOv8, Detectron2, ViT",
			description:
				"A YOLOv8 ensambling based approach to segment pictures, tables, text boxes and paragraphs from a bengali document image. The solution was used in DLSprint 2.0 competition, where it secured 2nd postion",
			logo: "./huggingface.png",
			linkText: "View Project",
			link: "https://huggingface.co/spaces/qoobeeshy/yolo-document-layout-analysis",
			git: "https://github.com/SaadNoor555/Document-Layout-Analysis",
		},

		{
			title: "CLARA: Code expLainer And Repo Analyzer",
			techs: "JavaScript, Gemini, chatGPT",
			description:
				"I am currently developing a Chrome Extention to explain, refactor and analyze your github codes using LLMs without ever leaving the tab. The extention will be released as open source tool soon!",
			logo: "./clara.jpg",
			linkText: "View Project",
			link: "",
			git: "",
		},

		{
			title: "Bank Branches CashFlow Forecasting",
			techs: "Python, LSTM, ARIMA",
			description:
				"While my internship at LEADS, I created a cashflow management system for bank branches, which leveraged previous cashflow and used them for time-series prediction using ARIMA, LSTM, etc.",
			logo: "./leads.jpg",
			linkText: "View Project",
			link: "https://colab.research.google.com/drive/1flk4lkQN1RckvcmVfkvb7Hc6AGCwoyjo?usp=sharing",
			git: "https://colab.research.google.com/drive/1flk4lkQN1RckvcmVfkvb7Hc6AGCwoyjo?usp=sharing",
		},

		{
			title: "BICM Stock Training Tool",
			techs: "Python, Vue",
			description:
				"Created a Digital Financial Literacy Project that makes use of web scraping to show valuable information about Dhaka Stock Exchange (DSE). The tool was developed for the Bangladesh Institute of Capital Market (BICM)",
			logo: "./bicm.png",
			linkText: "View Project",
			link: "https://dfl.bicm.ac.bd/",
			git: "https://dfl.bicm.ac.bd/",
		},

		{
			title: "Test Cube: Automated Test-case Generation Using Seq-to-seq Learning",
			techs: "Python, Django, Transformers",
			description:
				"In 2020, I created an automated unit test-case generator for JAVA codes, which used seq-to-seq model trained on Microsoft's 'methods2test' dataset.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com/SaadDroid/TestCube",
			git: "https://github.com/SaadDroid/TestCube",
		},

		{
			title: "DroidBrain: An Automated Android GUI Explorer",
			techs: "Python, Transformers, ADB",
			description:
				"DroidBrain is an android GUI explorer that can automatically traverse through android app UI. Given every necessary inputs, DroidBrain can smartly determine which action to perform in a UI to move forward.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "",
			git: "",
		},

		
	],
};

export default INFO;
