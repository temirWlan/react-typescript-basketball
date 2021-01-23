const { Schema, model } = require('mongoose');

const slideSchema = new Schema({
	imgSrc: {
		type: String,
		required: true
	},
	imgAlt: {
		type: String,
		required: true
	}
});


module.exports = model('Slide', slideSchema);