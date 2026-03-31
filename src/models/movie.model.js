const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true
    },
    nameLowerCase: {
        type: String,
        index: true
    },
    description: {
        type: String,
        minLength: 5,
        maxLength: 200,
        required: true
    },
    casts: {
        type: [String],
        required: true
    },
    trailerUrl: {
        type: String,
        required: true
    },
    language: {
        type: [String],
        required: true
    },
    releaseDate: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    releaseStatus: {
        type: String,
        required: true,
        default: "RELEASED"
    }
}, {
    timestamps: true
});

movieSchema.pre('save', function () {
    if (this.isModified("name")) {
        this.nameLowerCase = this.name.toLowerCase();
    }
})

movieSchema.pre('findOneAndUpdate', function () {
    let update = this.getUpdate();

    if (!update) return;

    if (update.$set && update.$set.name) {
        update.$set.nameLowerCase = update.$set.name.toLowerCase();
    } else if (update.name) {
        update.nameLowerCase = update.name.toLowerCase();
    }
});


const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;