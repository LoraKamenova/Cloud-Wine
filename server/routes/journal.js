const journalController = require('../controllers/journal');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/all', auth(), journalController.get.all);

router.get('/details/:id', auth(), journalController.get.details);

router.post('/my', auth(), journalController.post.my);

router.post('/', auth(), journalController.post.create);

router.put('/:id', auth(), journalController.put);

router.delete('/:id', auth(), journalController.delete);

module.exports = router;
