// const router = require('express').Router();
// const Journal = require('../models/Journal');
// const User = require('../models/User');
// // const { isAuth } = require('../middlewares/auth');
//
// router.get('/all', (req, res) => {
//     Journal.find().populate('creatorId')
//         .then(journals => {
//             res.json(journals);
//         });
// });
//
// router.post('/my', (req, res) => {
//     const { id } = req.body;
//     Journal.find({creatorId: id})
//         .then(journal => {
//             res.json(journal);
//         });
// });
//
// router.get('/random', (req, res) => {
//       Journal.aggregate([ { $sample: { size: 3 } } ])
//         .then(journals => {
//             res.json(journals);
//         });
// });
//
// router.get('/details/:id', (req, res) => {
//     const {id} = req.params;
//     Journal.findById(id)
//         .then(journal => {
//             res.json(journal);
//         })
// });
//
// router.post('/create', (req, res) => {
//     const {
//         title,
//         description,
//         place,
//         time,
//         imageUrl1,
//         imageUrl2,
//         creatorId
//     } = req.body;
//
//     const journal = new Journal({
//         title,
//         description,
//         place,
//         time,
//         imageUrl1,
//         imageUrl2,
//         creatorId
//     })
//
//     journal.save()
//         .then(createdJournal => {
//             return Promise.all([
//                 User.updateOne({_id: creatorId}, {$push: {journals: createdJournal}}),
//                 res.status(201).json({message: "New journal created successfully"})
//             ])
//         });
// });
//
// router.delete('/:id', (req, res) => {
//     const {id} = req.params;
//     Journal.findByIdAndDelete(id)
//         .then(res.status(200).json({
//             message: "JournalPage deleted successfully"
//         }));
// });
//
// router.patch('/edit/:id', (req, res) => {
//     const {
//         title,
//         description,
//         place,
//         time,
//         imageUrl1,
//         imageUrl2,
//         creatorId
//     } = req.body;
//
//     const id = req.params.id;
//
//     const newData = {};
//
//     title && (newData.title = title);
//     description && (newData.description = description);
//     place && (newData.place = place);
//     time && (newData.time = time);
//     imageUrl1 && (newData.imageUrl1 = imageUrl1);
//     imageUrl2 && (newData.imageUrl2 = imageUrl2);
//     creatorId && (newData.creatorId = creatorId);
//
//     Journal.findByIdAndUpdate(id, newData)
//         .then(res.status(200).json({
//             message: "JournalPage updated successfully"
//         }));
// })
//
// module.exports = router;

const Journal = require('../models/Journal');
const User = require('../models/User');

module.exports = {
    get: {
        all: (req, res, next) => {
            Journal.find().populate('creatorId')
                .then(journals => {
                    res.json(journals);
                });
        },

        details: (req, res, next) => {
            const {id} = req.params;
            Journal.findById(id)
                .then(journal => {
                    res.json(journal);
                })
        },
    },

    post: {
        my: (req, res, next) => {
            const { id } = req.body;
            Journal.find({creatorId: id})
                .then(wines => {
                    res.json(wines);
                });
        },

        create: (req, res, next) => {
            const {
                title,
                description,
                place,
                time,
                imageUrl1,
                imageUrl2,
                creatorId
            } = req.body;

            Journal.create({title, description, place, time, imageUrl1, imageUrl2, creatorId})
                .then((createdJournal) => {
                    return Promise.all([
                        User.updateOne({_id: creatorId}, {$push: {journals: createdJournal}}),
                        Journal.findOne({_id: createdJournal._id})
                    ]);
                })
                .then(([modifiedObj, JournalObj]) => {
                    res.send(JournalObj);
                })
                .catch(next);
        },
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const {
            title,
            description,
            place,
            time,
            imageUrl1,
            imageUrl2,
        } = req.body;

        Journal.updateOne({_id: id}, {title, description, place, time, imageUrl1, imageUrl2})
            .then((updatedJournal) => res.send(updatedJournal))
            .catch(next);
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        Journal.deleteOne({_id: id})
            .then((removedJournal) => res.send(removedJournal))
            .catch(next)
    }
};

