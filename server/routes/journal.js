const journalController = require('../controllers/journal');
const router = require('express').Router();

router.get('/all', journalController.get.all);

router.get('/details/:id', journalController.get.details);

router.post('/my', journalController.post.my);

router.post('/', journalController.post.create);

router.put('/:id', journalController.put);

router.delete('/:id', journalController.delete);

module.exports = router;
