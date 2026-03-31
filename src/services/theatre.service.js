const Theatre = require("../models/theatre.model");
const { STATUS_CODES } = require("../utils/constant");

const createTheatre = async (data) => {
    try {
        const theatre = await Theatre.create(data);
        return theatre;
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

module.exports = {
    createTheatre
}