const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18,
        max: 90,
        default: 20
    },
    phones: {
        type: [String],
        default: []
    },
    isMarried: {
        type: Boolean,
        default: false
    }
});

mongoose.model('persons', PersonSchema);

// phones: ['+38066..', '+38050..', '+38099..']

