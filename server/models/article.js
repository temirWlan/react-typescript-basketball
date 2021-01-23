const { Schema, model } = require('mongoose');

const articleSchema = new Schema({
	imgSrc: {
		type: String,
		required: true
	},
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
});


module.exports = model('Article', articleSchema);