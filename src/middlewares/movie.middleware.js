const { STATUS_CODES } = require("../utils/constant")
const { errorResponse } = require("../utils/responseBody")

const validateMovieCreateRequest = async (req, res, next) => {
    if (!req.body.name) {
        return errorResponse(res, 'Movie name is required', STATUS_CODES.BAD_REQUEST)
    }

    if (!req.body.description) {
        return errorResponse(res, 'Movie Description is required', STATUS_CODES.BAD_REQUEST)
    }

    if (!req.body.casts ||
        !(req.body.casts instanceof Array) ||
        req.body.casts.length <= 0
    ) {
        return errorResponse(res, 'Casts of movie is required', STATUS_CODES.BAD_REQUEST)
    }

    if (!req.body.trailerUrl) {
        return errorResponse(res, 'Movie trailer is required', STATUS_CODES.BAD_REQUEST)
    }

   if (!req.body.language ||
        !(req.body.language instanceof Array) ||
        req.body.casts.language <= 0
    ) {
        return errorResponse(res, 'Language of movie is required', STATUS_CODES.BAD_REQUEST)
    }

    if (!req.body.releaseDate) {
        return errorResponse(res, 'Release Date is required', STATUS_CODES.BAD_REQUEST)
    }

    if (!req.body.director) {
        return errorResponse(res, 'Director of movie is required', STATUS_CODES.BAD_REQUEST)
    }

     if(!req.body.releaseDate) {
        return errorResponse(res, 'Release Date of movie is required', STATUS_CODES.BAD_REQUEST)
    }

    next();
}

module.exports = {
    validateMovieCreateRequest
}