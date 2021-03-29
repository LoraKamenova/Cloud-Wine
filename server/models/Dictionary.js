const mongoose = require('mongoose');
const { String } = mongoose.Schema.Types;

const DictionarySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    fullText: {
        type: String,
        required: true,
    },
    shortText: {
        type: String,
        required: true,
    },
    iconWhiteUrl: {
        type: String,
        required: true
    },
    iconBlackUrl: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Dictionary', DictionarySchema);
