const user = require('../routes/user');
const destination = require('../routes/destination');
const wine = require('../routes/wine');

module.exports = (app) => {

    app.use('/api/user', user);
    app.use('/api/destinations', destination);
    // app.use('/api/journals', router.journal);
    app.use('/api/wines', wine);

    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. :thumbsup: </h1>'))
};
