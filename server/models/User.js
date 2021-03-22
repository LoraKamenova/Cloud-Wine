const mongoose = require('mongoose');
const { String, ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
    },
    journals: [{
        type: ObjectId,
        ref: 'Journal' }],
});

module.exports = mongoose.model('User', userSchema);
