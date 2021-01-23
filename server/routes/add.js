const { Router } = require('express');
const Article = require('../models/article');
const Card = require('../models/card');
const Slide = require('../models/slide');
const router = Router();

function getData(route, view, list) {
	router.get(`${route}`, (req, res) => {
		res.render(`${view}`, {
			title: `Adding ${view}`,
			list
		});
	});
}

function postData(route, model) {
	router.post(`${route}`, (req, res) => {
		const obj = new model({ ...req.body });

		try {
			obj.save();
			res.redirect(`/api/add/${route}`);
		} catch(e) {
			console.log(e);
		}
	});
}

const articleFields = [
	{ label: "Title", name:"title" },
	{ label: "Date", name:"date" },
	{ label: "Time", name:"time" },
	{ label: "Image source", name:"imgSrc" }
];

const cardFields = [
	{ label: "Title", name:"title" },
	{ label: "Date", name:"date" },
	{ label: "Time", name:"time" },
	{ label: "Description", name:"description" },
	{ label: "Caption", name: "caption" },
	{ label: "Coefficient", name:"coefficient" },
	{ label: "Image source", name:"imgSrc" },
	{ label: "Image alt", name:"imgAlt" }
];

const slideFields = [
	{ label: "Image source", name:"imgSrc" },
	{ label: "Image alt", name:"imgAlt" }
];

getData('/article', 'article', articleFields);
getData('/card', 'card', cardFields);
getData('/slide', 'slide', slideFields);
postData('/article', Article);
postData('/card', Card);
postData('/slide', Slide);


module.exports = router;

