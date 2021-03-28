const destinationController = require('../controllers/destination');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/all', auth(), destinationController.get.all);

router.get('/details/:id', auth(), destinationController.get.details);

router.post('/', auth(), destinationController.post);

router.put('/:id', auth(), destinationController.put);

router.delete('/:id', auth(), destinationController.delete);

module.exports = router;
