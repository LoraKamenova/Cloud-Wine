const userController = require('../controllers/user');
const router = require('express').Router();

router.post('/getOne', userController.post.getOne);

router.post('/register', userController.post.register);

router.post('/login', userController.post.login);

router.get('/verify', userController.post.verifyLogin);

router.post('/logout', userController.post.logout);

module.exports = router;
