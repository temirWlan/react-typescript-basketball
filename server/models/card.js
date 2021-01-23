const { Schema, model } = require('mongoose');

const cardSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	date: {
		type: String,
		required: true
	},
	time: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	caption: {
		type: String,
		required: true
	},
	coefficient: {
		type: String,
		required: true
	},
	imgSrc: {
		type: String,
		required: true
	},
	imgAlt: {
		type: String,
		required: true
	},
});


module.exports = model('Card', cardSchema);