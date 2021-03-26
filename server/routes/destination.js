const destinationController = require('../controllers/destination');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/all', destinationController.get.all);
router.get('/details/:id', destinationController.get.details);

// router.post('/', auth(), controllers.origami.post);
//
// router.put('/:id', auth(), controllers.origami.put);
//
// router.delete('/:id', auth(), controllers.origami.delete);

module.exports = router;
