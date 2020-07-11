const answerTemplate = require('../views/admin/answer');
const successTemplate = require('../views/admin/questionsuccess');
const Question = require('../models/Question');
const Answer = require('../models/Answer');

// @desc        Get answer page
// @route       GET /
// @access      Public
exports.getAnswer = async (req, res, next) => {
	try {
		const answers = await Answer.find();

		res.send(answerTemplate({ req }));
		// res.status(200).render(homeTemplate({ req }));
		// json({ success: true, count: questions.length, data: questions });

		//res.status(200).json({ success: true, data: question });
	} catch (err) {
		next(err);
	}
};

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

// // @desc        Create new question
// // @route       POST
// // @access      Public
// exports.createQuestion = async (req, res, next) => {
// 	try {
// 		const question = req.body;
// 		await Question.create(question);
// 		res.redirect('/');
// 	} catch (err) {
// 		next(err);
// 	}
// };
