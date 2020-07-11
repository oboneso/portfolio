const express = require('express');
const morgan = require('morgan');
const colors = require('colors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { restart } = require('nodemon');
const errorHandler = require('./middleware/error');
const layout = require('./views/layout');
const homeRouter = require('./routes/admin/homeRouter');

const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config({ path: './config/config.env' }); // load env variables
connectDB(); // connect to database

const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(errorHandler);
// dev logging environment
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

const Question = require('./models/Question'); // import questionSchema
const Answer = require('./models/Answer'); // import questionSchema

// GET and POST routes ---------------------------------------------------------
app.use(homeRouter);

app.post('/', async (req, res) => {
	const answer = await Answer.create(req.body);
	res.status(201).json({
		success: true,
		data: answer
	});
});
//-----------------------------------------------------------------------------

// mount router (path, route file) * path is used to complete the pathnames in bootcamps.js
// whichever router app.use is using it will start with /api/v1/bootcamps then use the path
// that is sent from router Ex: /:id  api/v1/bootcamps/:id or  just /
// app.use('/api/v1/questions', questions);

const PORT = process.env.PORT || 5000;

const server = app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
			.bold
	)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
	console.log(`Error: ${err.message}`.red);
	// Close server & exit process
	server.close(() => process.exit(1));
});
