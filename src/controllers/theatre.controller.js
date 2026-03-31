const { theatreService } = require("../services");
const { STATUS_CODES } = require("../utils/constant");
const { errorResponse, successResponse } = require("../utils/responseBody");

const createTheatre = async (req, res) => {
    try {
        const theatre = await theatreService.createTheatre(req.body);
        return successResponse(res, theatre, 'Added a new theatre', STATUS_CODES.CREATED);
    } catch (error) {
        if (error.err) {
            return errorResponse(res, error.err, error.err.code);
        }
        return errorResponse(res, error.message, STATUS_CODES.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createTheatre
}