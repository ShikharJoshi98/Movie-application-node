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
            throw error;
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

const getAllMovies = async (filter) => {
    let query = {};
    if (filter.name) {
        const search = filter.name.toLowerCase();
        const pattern = search.split('').join('.*');

        query.nameLowerCase = {
            $regex: pattern
        };
    }

    const movie = await Movie.find(query);
    if (movie.length === 0) {
        throw {
            err: 'Not able to find the movie',
            code: STATUS_CODES.NOT_FOUND
        }
    }
    return movie;
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

const updateMovie = async (id, data) => {
    try {
        const movie = await Movie.findByIdAndUpdate(id,
            data,
            {
                returnDocument: 'after',
                runValidators: true
            }
        );
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
    createMovie,
    getMovie,
    getAllMovies,
    deleteMovie,
    deleteAllMovies,
    updateMovie
}