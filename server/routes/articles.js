const { Router } = require('express');
const Article = require('../models/article');
const router = Router();

router.get('/', async (req, res) => {
	try {
		const articles = await Article.find();

		res.status(200).json(articles);
	} catch(err) {
		res.json({
			status: 500,
			body: err
		});
	}
});

module.exports = router;