const mongoose = require('mongoose');

const animalSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 3,
    },
    weight: {
        type: Number,
        require: true,
        min: 0,
        max: 100,
    },
});

const Animal = mongoose.model('animal', animalSchema);

module.exports = {
    Animal,
    animalSchema,
};
