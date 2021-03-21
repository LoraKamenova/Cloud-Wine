const router = require('express').Router();

const authController = require('./controllers/authController');
const destinationController = require('./controllers/destinationController');
const journalController = require('./controllers/journalController');

router.use('/auth', authController);
router.use('/destinations', destinationController);
router.use('/journals', journalController);

module.exports = router;
