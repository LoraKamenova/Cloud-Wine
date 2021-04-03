const dictionaryController = require('../controllers/dictionary');
const router = require('express').Router();
// const { auth } = require('../utils');

router.get('/all', dictionaryController.get.all);

router.get('/details/:id', dictionaryController.get.details);

router.post('/', dictionaryController.post);

router.put('/:id', dictionaryController.put);

router.delete('/:id', dictionaryController.delete);

module.exports = router;
