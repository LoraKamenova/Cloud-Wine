// const config = {
//     PORT: 5000,
//     DB_URI: `mongodb://localhost/wine-db`,
//     authCookieName: 'x-auth-token',
// };
//
//
// module.exports = config;

const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 5000,
        dbURL: '`mongodb://localhost/wine-db',
        authCookieName: 'x-auth-token'
    },
    production: {}
};

module.exports = config[env];
