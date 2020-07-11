const express = require('express');
const { getAnswer, createAnswer } = require('../../controllers/answer');
const homeTemplate = require('../../views/admin/answer');
const successTemplate = require('../../views/admin/questionsuccess');

const router = express.Router();
// router.route('/').get(getHome);

router.route('/').get(getAnswer);
router.route('/').post(createAnswer);
module.exports = router;
