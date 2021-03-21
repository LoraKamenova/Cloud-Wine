const mongoose = require('mongoose');
const { String, ObjectId } = mongoose.Schema.Types;

const JournalSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl1: {
        type: String,
        required: true
    },
    imageUrl2:{
        type: String,
        required: true
    },
    creatorId: {
        type: ObjectId,
        ref: 'User' },
});

module.exports = mongoose.model('Journal', JournalSchema);
