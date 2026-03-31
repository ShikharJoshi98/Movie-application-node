const Movie = require("../models/movie.model");
const { STATUS_CODES } = require("../utils/constant");

const createMovie = async (data) => {
    try {
        const movie = await Movie.create(data);
        return movie;
    } catch (error) {
        if (error.name == 'ValidationError') {
            let err = {};
            Object.keys(error.errors).forEach((key) => {
                err[key] = error.errors[key].message
            })
            throw { err: err, code: STATUS_CODES.UNPROCESSABLE_ENTITY }
        }
        else {            
            throw new error;
        }
    }
}

const getMovie = async (id) => {
    try {
        const movie = await Movie.findById(id);
        return movie;
    } catch (error) {
        throw new error;
    }
}

const getAllMovies = async () => {
    try {
        const movies = await Movie.find();
        return movies;
    } catch (error) {
        throw new error;
    }
}

const deleteMovie = async (id) => {
    try {
        const movie = await Movie.findByIdAndDelete(id);
        return movie;
    } catch (error) {
        throw new error;
    }
}

const deleteAllMovies = async () => {
    try {
        await Movie.deleteMany({});
        return;
    } catch (error) {
        throw new error;
    }
}

module.exports = {
    createMovie,
    getMovie,
    getAllMovies,
    deleteMovie,
    deleteAllMovies
}