// const express = require('express');
//
// const cors = require('cors');
//
// const routes = require('./routes');
// const { auth } = require('./middlewares/auth');
// const errorHandler = require('./middlewares/errorHandler');
// const { PORT } = require('./config/config')
// const cookieParser = require('cookie-parser');
// const secret = 'secret';
//
// const app = express();
//
// require('./config/database')
//
// app.use(cors({
//     exposedHeaders: 'Authorization'
// }));
// app.use(express.json()); // IMPORTANT FOR REST API!!!
//
// app.use(auth);
//
// app.get('/', (req, res) => {
//     res.json({ message: 'It\'s working!'});
// });
//
// app.use('/api', routes);
// app.use(errorHandler);
// app.use(cookieParser(secret));
//
// app.listen(PORT, console.log.bind(console, `Server is listening on port ${PORT}...`));

const config = require('./config/config');
const dbConnection = require('./config/database');

const app = require('express')();

dbConnection().then(() => {

    require('./config/express')(app);

    require('./config/routes')(app);

    app.use(function (err, req, res, next) {
        console.error(err);
        res.status(500).send(err.message);
    });

    app.listen(config.port, console.log(`Listening on port ${config.port}!`))

}).catch(console.error);
