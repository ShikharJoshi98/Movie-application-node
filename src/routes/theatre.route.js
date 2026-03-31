const express = require('express');
const { theatreController } = require('../controllers');
const theatreMiddleware = require('../middlewares/theatre.middleware');

const router = express.Router();

router.post('/createTheatre',
    theatreMiddleware.validateTheatreCreateRequest,
    theatreController.createTheatre
);

module.exports = router;