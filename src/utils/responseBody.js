const successResponse = (res, data, message, statusCode) => {
    return res
        .status(statusCode || 200)
        .json({
            success: true,
            message: message || 'Successfull',
            data: data || null
        });
}

const errorResponse = (res, message, statusCode) => {
    return res
        .status(statusCode || 500)
        .json({
            success: false,
            message: message||'Internal Server Error',
        });
}

module.exports = {
    successResponse,
    errorResponse
}