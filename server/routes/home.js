const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
	res.end(`<h1>Title</h1>`);
});

module.exports = router;