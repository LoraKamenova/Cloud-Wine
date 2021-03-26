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
        // const {description} = req.body;
        // const {_id} = req.user;
        //
        // models.Origami.create({description, author: _id})
        //     .then((createdOrigami) => {
        //         return Promise.all([
        //             models.User.updateOne({_id}, {$push: {posts: createdOrigami}}),
        //             models.Origami.findOne({_id: createdOrigami._id})
        //         ]);
        //     })
        //     .then(([modifiedObj, origamiObj]) => {
        //         res.send(origamiObj);
        //     })
        //     .catch(next);
    },

    put: (req, res, next) => {
        // const id = req.params.id;
        // const {description} = req.body;
        // models.Origami.updateOne({_id: id}, {description})
        //     .then((updatedOrigami) => res.send(updatedOrigami))
        //     .catch(next)
    },

    delete: (req, res, next) => {
        // const id = req.params.id;
        // models.Origami.deleteOne({_id: id})
        //     .then((removedOrigami) => res.send(removedOrigami))
        //     .catch(next)
    }
};
