const { STATUS_CODES } = require("../utils/constant");
const { errorResponse } = require("../utils/responseBody");

const validateTheatreCreateRequest = async (req, res, next) => {

    if (!req.body.name) {
        return errorResponse(res, "The name of the theatre is not present in the request", STATUS_CODES.BAD_REQUEST);
    }

    if (!req.body.pincode) {
        return errorResponse(res, "The pincode of the theatre is not present in the request", STATUS_CODES.BAD_REQUEST);

    }

    if (!req.body.city) {
        return errorResponse(res, "The city of the theatre is not present", STATUS_CODES.BAD_REQUEST);
    }
    next();
}

module.exports = {
    validateTheatreCreateRequest
}