const mongoose = require('mongoose');
const { String } = mongoose.Schema.Types;

const DestinationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    lat: {
        type: String,
        required: true,
    },
    lon: {
        type: String,
        required: true,
    },
    services: {
        type: String,
        required: true,
    },
    logoUrl: {
        type: String,
        required: true
    },
    imageUrl1: {
        type: String,
        required: true
    },
    imageUrl2:{
        type: String,
        required: true
    },
    mapUrl: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Destination', DestinationSchema);
