// const database = require('mongoose');
// const { DB_URI } = require('./config');
//
// const dbOptions = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// };
//
// database.connect(DB_URI, dbOptions);
//
// const db = database.connection;
//
// db.on('error', console.error.bind(console, 'connection error:'));
//
// db.once('open', function () {
//     console.log('DB is connected');
// });
//
// module.exports = db;


const mongoose = require('mongoose');
const config = require('./config');

module.exports = () => {
    return mongoose.connect(config.dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
};
