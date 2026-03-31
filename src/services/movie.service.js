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

module.exports = {
    createMovie
}