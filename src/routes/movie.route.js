const express = require('express');
const { movieController } = require('../controllers');
const movieMiddleware = require('../middlewares/movie.middleware');

const router = express.Router();

router.post('/createMovie',
    movieMiddleware.validateMovieCreateRequest,
    movieController.createMovie
);

router.get('/getMovie/:id',
    movieController.getMovie
);

router.get('/getMovie',
    movieController.getAllMovies
);

router.delete('/deleteMovie/:id',
    movieController.deleteMovie
)

router.delete('/deleteAllMovies',
    movieController.deleteAllMovies
)

router.patch('/updateMovie/:id',
    movieController.updateMovie
)

module.exports = router;