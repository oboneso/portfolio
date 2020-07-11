const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
	answer: {
		type: String,
		required: [
			true,
			'Please add a name'
		],
		unique: true,
		trim: true,
		maxlength: [
			500,
			'Answer can not be more than 500 characters'
		]
	},
	source: {
		type: String,
		required: [
			true,
			'please add source. Ex: MDN docs, W3Schools, self - experience'
		],
		unique: false,
		trim: true,
		maxlength: [
			300,
			'Topic can not be more than 300 characters'
		]
	},
	tags: {
		type: String,
		required: [
			true,
			'please add topic tags, separated by commas. Ex: variables, promises, nodeJS'
		],
		unique: false,
		trim: true,
		maxlength: [
			300,
			'Topic can not be more than 300 characters'
		]
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Answer', AnswerSchema);
