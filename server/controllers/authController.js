const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.get('/all', (req, res) => {
    User.find()
        .then(users => {
            res.json(users);
        });
});

router.post('/register', (req, res) => {
    // TODO: Check if user exists

    let user = new User(req.body);

    user.save()
        .then(createdUser => {
            res.status(201).json({ message: "New user created successfully"});
        });

});

router.post('/login', (req, res, next) => {
    const {login: username, password} = req.body; 

    User.where({username, password})
        .findOne()
            .then(user => {
                let token = jwt.sign({
                    _id: user._id,
                    username: user.username,
                }, 'SOMESUPERSECRET', { expiresIn: '1h'});

                res.status(200).json({
                    _id: user._id,
                    username: user.username,
                    token
                })
            })
            .catch(err => {
                next({status: 404, message: 'No such user or password!', type: 'ERROR'})
            })
});

module.exports = router;
