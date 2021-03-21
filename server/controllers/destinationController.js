const router = require('express').Router();
const Destination = require('../models/Destination');
// const { isAuth } = require('../middlewares/auth');

router.get('/all', (req, res) => {
    Destination.find()
        .then(destinations => {
            res.json(destinations);
        });
});

router.get('/details/:id', (req, res) => {
    const { id } = req.params;
    Destination.find({ _id: id })
        .then(destination => {
            res.json(destination);
        })
});

// router.post('/', isAuth, (req, res) => {
//     let movie = new Movie(req.body);
//
//     movie.save()
//         .then(createdMovie => {
//             res.status(201).json({_id: createdMovie._id});
//         });
// });

module.exports = router;
