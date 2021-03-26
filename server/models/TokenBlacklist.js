const mongoose = require('mongoose');
const { String, Number, Boolean, ObjectId } = mongoose.Schema.Types;

const tokenBlacklist = new mongoose.Schema({
    token: String
});

module.exports = new mongoose.model('TokenBlacklist', tokenBlacklist);
