const { movieService } = require("../services");
const { STATUS_CODES } = require("../utils/constant");
const { successResponse, errorResponse } = require("../utils/responseBody");

const createMovie = async (req, res) => {
    try {
        const movie = await movieService.createMovie(req.body);
        return successResponse(res, movie, 'Added a new movie', STATUS_CODES.CREATED);
    } catch (error) {
        if (error.err) {
            return errorResponse(res, error.err, error.err.code);
        }
        return errorResponse(res, error.message, STATUS_CODES.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    createMovie
}