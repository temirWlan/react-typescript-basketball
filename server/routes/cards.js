const { Router } = require('express');
const Card = require('../models/card');
const router = Router();

router.get('/', async (req, res) => {
	try {
		const cards = await Card.find();

		res.status(200).json(cards);
	} catch(err) {
		res.json({
			status: 500,
			body: err
		});
	}
});

module.exports = router;