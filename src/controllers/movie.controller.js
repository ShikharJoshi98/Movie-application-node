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
        return errorResponse(res, error.message, STATUS_CODES.INTERNAL_SERVER_ERROR);
    }
}

const getMovie = async (req, res) => {
    try {
        const movie = await movieService.getMovie(req.params.id);
        return successResponse(res, movie, 'Movie fetched successfully', STATUS_CODES.OK);
    } catch (error) {
        return errorResponse(res, error.message, STATUS_CODES.NOT_FOUND);
    }
}

const getAllMovies = async (req, res) => {
    try {
        const movies = await movieService.getAllMovies();
        return successResponse(res, movies, 'All Movies fetched successfully', STATUS_CODES.OK);
    } catch (error) {
        return errorResponse(res, error.message, STATUS_CODES.NOT_FOUND);
    }
}

const deleteMovie = async (req, res) => {
    try {
        if (!req.params.id) {
            return errorResponse(res, error.message, STATUS_CODES.UNPROCESSABLE_ENTITY);
        }
        const movie = await movieService.deleteMovie(req.params.id);

        return successResponse(res, movie, 'Delete Movie successfully', STATUS_CODES.OK);
    } catch (error) {
        return errorResponse(res, error.message, STATUS_CODES.INTERNAL_SERVER_ERROR);
    }
}

const deleteAllMovies = async (req, res) => {
    try {
        await movieService.deleteAllMovies();
        return successResponse(res, {}, 'Deleted all movies successfully', STATUS_CODES.OK);
    } catch (error) {
        return errorResponse(res, error.message, STATUS_CODES.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createMovie,
    getMovie,
    getAllMovies,
    deleteMovie,
    deleteAllMovies
}