const mongoose = require('mongoose');
const { String, ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    type: {
        type: String,
    },
    journals: [{
        type: ObjectId,
        ref: 'Journal' }],
});

module.exports = mongoose.model('User', userSchema);
