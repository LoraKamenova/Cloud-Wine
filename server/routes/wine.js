const wineController = require('../controllers/wine');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/all', auth(), wineController.get.all);

router.get('/top', auth(), wineController.get.top);

router.get('/details/:id', auth(), wineController.get.details);

router.post('/', auth(), wineController.post);

router.put('/:id', auth(), wineController.put);

router.delete('/:id', auth(), wineController.delete);

module.exports = router;
