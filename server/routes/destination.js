const destinationController = require('../controllers/destination');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/all', destinationController.get.all);
router.get('/details/:id', destinationController.get.details);

router.post('/', destinationController.post);

router.put('/:id', destinationController.put);

router.delete('/:id', destinationController.delete);

module.exports = router;
