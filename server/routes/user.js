const userController = require('../controllers/user');
const router = require('express').Router();

router.get('/', userController.get);

router.post('/register', userController.post.register);

router.post('/login', userController.post.login);

router.get('/verify', userController.post.verifyLogin);

router.post('/logout', userController.post.logout);

// router.put('/:id', controllers.user.put);
//
// router.delete('/:id', controllers.user.delete);

module.exports = router;
