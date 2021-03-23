const router = require('express').Router();
const Journal = require('../models/Journal');
const User = require('../models/User');
// const { isAuth } = require('../middlewares/auth');

router.get('/all', (req, res) => {
    Journal.find()
        .then(journals => {
            res.json(journals);
        });
});

router.get('/my', (req, res) => {
    const { _id: id } = req.body;
    Journal.find({creatorId: id})
        .then(journal => {
            res.json(journal);
        });
});

router.get('/random', (req, res) => {
      Journal.aggregate([ { $sample: { size: 3 } } ])
        .then(journals => {
            res.json(journals);
        });
});

router.get('/details/:id', (req, res) => {
    const {id} = req.params;
    Journal.findById(id)
        .then(journal => {
            res.json(journal);
        })
});

router.post('/create', (req, res) => {
    const {
        title,
        description,
        imageUrl1,
        imageUrl2,
        creatorId
    } = req.body;

    const journal = new Journal({
        title,
        description,
        imageUrl1,
        imageUrl2,
        creatorId
    })

    journal.save()
        .then(createdJournal => {
            return Promise.all([
                User.updateOne({_id: creatorId}, {$push: {journals: createdJournal}}),
                res.status(201).json({message: "New journal created successfully"})
            ])
        });
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    Journal.findByIdAndDelete(id)
        .then(res.status(200).json({
            message: "Journal deleted successfully"
        }));
});

router.patch('/edit/:id', (req, res) => {
    const {
        title,
        description,
        imageUrl1,
        imageUrl2,
        creatorId
    } = req.body;

    const id = req.params.id;

    const newData = {};

    title && (newData.title = title);
    description && (newData.description = description);
    imageUrl1 && (newData.imageUrl1 = imageUrl1);
    imageUrl2 && (newData.imageUrl2 = imageUrl2);
    creatorId && (newData.creatorId = creatorId);

    Journal.findByIdAndUpdate(id, newData)
        .then(res.status(200).json({
            message: "Journal updated successfully"
        }));
})

module.exports = router;
