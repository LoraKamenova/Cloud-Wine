const wineController = require('../controllers/wine');
const router = require('express').Router();
// const { auth } = require('../utils');

router.get('/all', wineController.get.all);

router.get('/top', wineController.get.top);

router.get('/details/:id', wineController.get.details);

router.post('/', wineController.post);

router.put('/:id', wineController.put);

router.delete('/:id', wineController.delete);

module.exports = router;
