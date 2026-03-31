const express = require('express');
const { movieController } = require('../controllers');
const movieMiddleware = require('../middlewares/movie.middleware');

const router = express.Router();

router.post('/createMovie',
    movieMiddleware.validateMovieCreateRequest,
    movieController.createMovie
);

module.exports = router;