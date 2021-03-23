const mongoose = require('mongoose');
const { String } = mongoose.Schema.Types;

const WineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    producer: {
        type: String,
        required: true,
    },
    imageUrl1: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Wine', WineSchema);
