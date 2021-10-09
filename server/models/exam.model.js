const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: [true, 'Pet Name must be entered'],
        minlength: [3, 'Pet Name must be at least 3 characters long.'],
        unique: true
    },
    petType: {
        type: String,
        required: [true, 'Pet Type must be entered'],
        minlength: [3, 'Pet Type must be at least 3 characters long.']
    },
    petDescription: {
        type: String,
        required: [true, 'Pet Description must be entered'],
        minlength: [3, 'Pet Description must be at least 3 characters long.']
    },
    skillOne: {
        type: String
    },
    skillTwo: {
        type: String
    },
    skillThree: {
        type: String
    }
}, { timestamps: true });

PetSchema.plugin(uniqueValidator, {message: 'Pet Name has already been taken, please enter a different name.'});
module.exports = mongoose.model('Pet', PetSchema);