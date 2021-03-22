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

    let role = "user";

    User.countDocuments((err, count) => {
        if (( err ) || (count === 0)) {
            role = "root";
        }
    });

    User.findOne({username: req.body.username}).then(user => {
        if (user) {
            return res.status(400).json({
                message: "User already exists"
            })
        } else {
            const { username, password } = req.body;
            let user = new User({username, password, role});
            user.save()
                .then(createdUser => {
                    res.status(201).json({message: "New user created successfully"});
                });
        }
    })

});


// router.post('/login', (req, res, next) => {
//     const {login: username, password} = req.body;
//
//     User.where({username, password})
//         .findOne()
//         .then(user => {
//             let token = jwt.sign({
//                 _id: user._id,
//                 username: user.username,
//             }, 'SOMESUPERSECRET', {expiresIn: '1h'});
//
//             res.status(200).json({
//                 _id: user._id,
//                 username: user.username,
//                 token
//             })
//         })
//         .catch(err => {
//             next({status: 404, message: 'No such user or password!', type: 'ERROR'})
//         })
// });

module.exports = router;
