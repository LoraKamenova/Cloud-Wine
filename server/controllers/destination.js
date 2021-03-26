// const router = require('express').Router();
// const Destination = require('../models/Destination');
// // const { isAuth } = require('../middlewares/auth');
//
// router.get('/all', (req, res) => {
//     Destination.find()
//         .then(destinations => {
//             res.json(destinations);
//         });
// });
//
// router.get('/details/:id', (req, res) => {
//     const { id } = req.params;
//     Destination.findById(id)
//         .then(destination => {
//             res.json(destination);
//         })
// });
//
// router.post('/create', (req, res) => {
//     const {
//         name,
//         description,
//         address,
//         services,
//         logoUrl,
//         imageUrl1,
//         imageUrl2,
//         mapUrl
//     } = req.body;
//
//     const destination = new Destination({
//         name,
//         description,
//         address,
//         services,
//         logoUrl,
//         imageUrl1,
//         imageUrl2,
//         mapUrl
//     })
//
//     destination.save()
//         .then(createdDestination => {
//             res.status(201).json({ message: "New destination created successfully"});
//         });
// });
//
// router.delete('/:id', (req, res) => {
//     const { id } = req.params;
//     Destination.findByIdAndDelete(id)
//         .then(res.status(200).json({
//             message: "DestinationPage deleted successfully"
//         }));
// });
//
// router.patch('/edit/:id', (req, res) => {
//     const {
//         name,
//         description,
//         address,
//         services,
//         logoUrl,
//         imageUrl1,
//         imageUrl2,
//         mapUrl
//     } = req.body;
//
//     const id = req.params.id;
//
//     const newData = {};
//
//     name && (newData.name = name);
//     description && (newData.description = description);
//     address && (newData.address = address);
//     services && (newData.services = services);
//     logoUrl && (newData.logoUrl = logoUrl);
//     imageUrl1 && (newData.imageUrl1 = imageUrl1);
//     imageUrl2 && (newData.imageUrl2 = imageUrl2);
//     mapUrl && (newData.mapUrl = mapUrl);
//
//     Destination.findByIdAndUpdate(id, newData)
//         .then(res.status(200).json({
//             message: "DestinationPage updated successfully"
//         }));
// })
//
// module.exports = router;

const Destination = require('../models/Destination');
const User = require('../models/User');

module.exports = {
    // get: (req, res, next) => {
    //     const length = req.query.length ? parseInt(req.query.length) : 20
    //     Destination.find().sort('-created_at').limit(length).populate('author')
    //         .then((origamies) => res.send(origamies))
    //         .catch(next);
    // },

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
            services,
            logoUrl,
            imageUrl1,
            imageUrl2,
            mapUrl
        } = req.body;

        Destination.create({name, description, address, services, logoUrl, imageUrl1, imageUrl2, mapUrl})
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
            services,
            logoUrl,
            imageUrl1,
            imageUrl2,
            mapUrl
        } = req.body;

        console.log(description);

        Destination.updateOne({_id: id}, {name, description, address, services, logoUrl, imageUrl1, imageUrl2, mapUrl})
            .then((updatedDestination) => res.send(updatedDestination))
            .catch(next);
    },

    delete: (req, res, next) => {
        // const id = req.params.id;
        // models.Origami.deleteOne({_id: id})
        //     .then((removedOrigami) => res.send(removedOrigami))
        //     .catch(next)
    }
};
