const Destination = require('../models/Destination');

module.exports = {
    get: {
        all: (req, res, next) => {
            Destination.find()
                .then(destinations => {
                    res.json(destinations);
                });
        },

        details: (req, res, next) => {
            const {id} = req.params;
            Destination.findById(id)
                .then(destination => {
                    res.json(destination);
                })
        },

    },

    post: (req, res, next) => {
        const {
            name,
            description,
            address,
            latitude,
            longitude,
            services,
            logoUrl,
            imageUrl1,
            imageUrl2,
            mapUrl
        } = req.body;

        Destination.create({name, description, address, latitude, longitude, services, logoUrl, imageUrl1, imageUrl2, mapUrl})
            .then((createdDestination) => {
                return Promise.all([
                    Destination.findOne({_id: createdDestination._id})
                ]);
            })
            .then(([modifiedObj, destinationObj]) => {
                res.send(destinationObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const {
            name,
            description,
            address,
            latitude,
            longitude,
            services,
            logoUrl,
            imageUrl1,
            imageUrl2,
            mapUrl
        } = req.body;

        Destination.updateOne({_id: id}, {name, description, address, latitude, longitude, services, logoUrl, imageUrl1, imageUrl2, mapUrl})
            .then((updatedDestination) => res.send(updatedDestination))
            .catch(next);
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        Destination.deleteOne({_id: id})
            .then((removedDestination) => res.send(removedDestination))
            .catch(next)
    }
};
