const { Router } = require('express');
const Slide = require('../models/slide');
const router = Router();

router.get('/', async (req, res) => {
	try {
		const slides = await Slide.find();

		res.status(200).json(slides);
	} catch(err) {
		res.json({
			status: 500,
			body: err
		});
	}
});

module.exports = router;