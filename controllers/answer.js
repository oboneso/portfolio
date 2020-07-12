const answerTemplate = require('../views/admin/answer');
const successTemplate = require('../views/admin/questionsuccess');
const signinTemplate = require('../views/admin/signin');
const Question = require('../models/Question');
const Answer = require('../models/Answer');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc        Get home page
// @route       GET /
// @access      Public
exports.getHome = asyncHandler(async (req, res, next) => {
	try {
		res.send(signinTemplate);
	} catch (err) {
		next(err);
	}
});
// @desc        Create new answer
// @route       POST /
// @access      Public
exports.createAnswer = async (req, res, next) => {
	try {
		const answer = req.body;
		console.log(req.body);
		if (req.body.source === '') {
			res.send('All fields mandatory');
		}
		await Answer.create(answer);
		res.send('Answer Submitted!');
	} catch (err) {
		next(err);
	}
};

// // @desc        Home page
// // @route       GET /signin
// // @access      Public
// exports.getHome = async (req, res, next) => {};
