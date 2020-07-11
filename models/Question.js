const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
	question: {
		type: String,
		required: [
			true,
			'Please add a name'
		],
		unique: false,
		trim: true,
		maxlength: [
			300,
			'Question can not be more than 300 characters'
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

module.exports = mongoose.model('Question', QuestionSchema);
