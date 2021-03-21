const router = require('express').Router();
const Journal = require('../models/Journal');
// const { isAuth } = require('../middlewares/auth');

router.get('/all', (req, res) => {
    Journal.find()
        .then(journals => {
            res.json(journals);
        });
});

router.get('/details/:id', (req, res) => {
    const { id } = req.params;
    Journal.find({ _id: id })
        .then(journal => {
            res.json(journal);
        })
});

module.exports = router;
