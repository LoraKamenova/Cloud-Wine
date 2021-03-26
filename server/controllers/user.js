const User = require('../models/User')
const TokenBlacklist = require('../models/TokenBlacklist')
const config = require('../config/config');
const utils = require('../utils');

module.exports = {
    get: (req, res, next) => {
        User.findById(req.query.id)
            .then((user) => res.send(user))
            .catch((err) => res.status(500).send("Error"))
    },

    post: {
        register: (req, res, next) => {
            let role = "user";

            User.countDocuments((err, count) => {
                if (count === 0) {
                    role = "root"
                }
            }).then(() => {
                const {username, password} = req.body;
                User.create({username, password, role})
                    .then((createdUser) => {
                        const token = utils.jwt.createToken({id: createdUser._id});
                        res.header("Authorization", token).send(createdUser);
                    })
                    .catch((err) => {

                        console.log(err)
                    })
            })

        },

        verifyLogin: (req, res, next) => {
            const token = req.headers.authorization || '';

            Promise.all([
                utils.jwt.verifyToken(token),
                TokenBlacklist.findOne({token})
            ])
                .then(([data, blacklistToken]) => {
                    if (blacklistToken) {
                        return Promise.reject(new Error('blacklisted token'))
                    }

                    User.findById(data.id)
                        .then((user) => {
                            return res.send({
                                status: true,
                                user
                            })
                        });
                })
                .catch(err => {
                    if (['token expired', 'blacklisted token', 'jwt must be provided'].includes(err.message)) {
                        res.status(401).send('UNAUTHORIZED!');
                        return;
                    }

                    res.send({
                        status: false
                    })
                })
        },

        login: (req, res, next) => {
            const {username, password} = req.body;

            User.findOne({username})
                // .then((user) => Promise.all([user, user.matchPassword(password)]))
                .then((user) => {
                    // if (!match) {
                    //     res.status(401).send('Invalid password');
                    //     return;
                    // }

                    const token = utils.jwt.createToken({id: user._id});
                    res.header("Authorization", token).send(user);
                    console.log(user)
                })
                .catch(next);
        },

        logout: (req, res, next) => {
            const token = req.cookies[config.authCookieName];
            TokenBlacklist.create({token})
                .then(() => {
                    res.clearCookie(config.authCookieName).send('Logout successfully!');
                })
                .catch(next);
        }
    }
};
