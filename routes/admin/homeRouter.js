const express = require('express');
const {
	getAnswer,
	createAnswer,
	getHome
} = require('../../controllers/answer');

const successTemplate = require('../../views/admin/questionsuccess');

const router = express.Router();
router.route('/').get(getHome);

router.route('/answer').get(getAnswer);
router.route('/answer').post(createAnswer);

module.exports = router;
