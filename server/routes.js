const router = require('express').Router();

const authController = require('./controllers/authController');
const destinationController = require('./controllers/destinationController');
const journalController = require('./controllers/journalController');
const wineController = require('./controllers/wineController');

router.use('/auth', authController);
router.use('/destinations', destinationController);
router.use('/journals', journalController);
router.use('/wines', wineController);

module.exports = router;
