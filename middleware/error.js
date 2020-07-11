const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
	// pass all the err values to error
	let error = { ...err };
	error.message = err.message;

	// Log console for dev
	console.log(err);

	// Mongoose bad ObjectId
	if (err.name === 'CastError') {
		const message = `Resource not found with id of ${err.value}`;
		error = new ErrorResponse(message, 404);
	}

	// Mongoose duplicate key
	if (err.name === 11000) {
		const message = 'Duplicate field value entered';
		err = new ErrorResponse(message, 400);
	}

	// Mongoose validation error
	if (err.name === 'ValidationError') {
		// Get object values using Object.values, pass in err.errors,
		// use .map to iterate over each one and extract what we want
		const message = Object.values(err.errors).map((val) => val.message);
		error = new ErrorResponse(message, 400);
	}

	res.status(error.statusCode || 500).json({
		success: false,
		error: error.message || 'Server Error'
	});
};

module.exports = errorHandler;
