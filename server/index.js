const express = require('express');

const cors = require('cors');

const routes = require('./routes');
const { auth } = require('./middlewares/auth');
const errorHandler = require('./middlewares/errorHandler');
const { PORT } = require('./config/config')

const app = express();

require('./config/mongoose')

app.use(cors());
app.use(express.json()); // IMPORTANT FOR REST API!!!

app.use(auth);

app.get('/', (req, res) => {
    res.json({ message: 'It\'s working!'});
});

app.use('/api', routes);
app.use(errorHandler);

app.listen(PORT, console.log.bind(console, `Server is listening on port ${PORT}...`));
