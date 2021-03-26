// const router = require('express').Router();
// const Wine = require('../models/Wine');
// const User = require('../models/User');
// // const { isAuth } = require('../middlewares/auth');
//
// router.get('/all', (req, res) => {
//     Wine.find()
//         .then(wines => {
//             res.json(wines);
//         });
// });
//
// router.get('/random', (req, res) => {
//     Wine.aggregate([ { $sample: { size: 3 } } ])
//         .then(wine => {
//             res.json(wine);
//         });
// });
//
// router.get('/details/:id', (req, res) => {
//     const {id} = req.params;
//     Wine.findById(id)
//         .then(wine => {
//             res.json(wine);
//         })
// });
//
// router.post('/create', (req, res) => {
//     const {
//         name,
//         category,
//         description,
//         producer,
//         imageUrl1,
//     } = req.body;
//
//     const wine = new Wine({
//         name,
//         category,
//         description,
//         producer,
//         imageUrl1,
//     })
//
//     wine.save()
//         .then(createdWine => {
//             res.status(201).json({ message: "New wine created successfully"});
//         });
// });
//
// router.delete('/:id', (req, res) => {
//     const {id} = req.params;
//     Wine.findByIdAndDelete(id)
//         .then(res.status(200).json({
//             message: "Wine deleted successfully"
//         }));
// });
//
// router.patch('/edit/:id', (req, res) => {
//     const {
//         name,
//         category,
//         description,
//         producer,
//         imageUrl2,
//     } = req.body;
//
//     const id = req.params.id;
//
//     const newData = {};
//
//     name && (newData.name = name);
//     category && (newData.category = category);
//     description && (newData.description = description);
//     producer && (newData.creatorId = producer);
//     imageUrl2 && (newData.imageUrl2 = imageUrl2);
//
//     Wine.findByIdAndUpdate(id, newData)
//         .then(res.status(200).json({
//             message: "Wine updated successfully"
//         }));
// })
//
// module.exports = router;

const Wine = require('../models/Wine');

module.exports = {
    get: {
        all: (req, res, next) => {
            Wine.find().sort('name')
                .then(wines => {
                    res.json(wines);
                });
        },

        details: (req, res, next) => {
            const {id} = req.params;
            Wine.findById(id)
                .then(wine => {
                    res.json(wine);
                })
        },
        top: (req, res, next) => {
            Wine.aggregate([{$sample: {size: 3}}])
                .then(wines => {
                    res.json(wines);
                });
        }
    },

    post: (req, res, next) => {
        const {
        name,
        category,
        description,
        producer,
        imageUrl1,
        } = req.body;

        Wine.create({name, category, description, producer, imageUrl1})
            .then((createdWine) => {
                return Promise.all([
                    Wine.findOne({_id: createdWine._id})
                ]);
            })
            .then(([modifiedObj, WineObj]) => {
                res.send(WineObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const {
            name,
            category,
            description,
            producer,
            imageUrl1,
        } = req.body;

        console.log(description);

        Wine.updateOne({_id: id}, {name, category, description, producer, imageUrl1})
            .then((updatedWine) => res.send(updatedWine))
            .catch(next);
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        Wine.deleteOne({_id: id})
            .then((removedWine) => res.send(removedWine))
            .catch(next)
    }
};
