const expressSession = require('express-session');
const MSSQLStore = require('connect-mssql-v2');

const configSession = {
    user: 'test',
    password: '123',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    database: 'testdb',
    options: {
        encrypt: true, // Use this if you're on Windows Azure
        trustServerCertificate: true // use this if your MS SQL instance uses a self signed certificate
    }
};


module.exports = expressSession({
    store: new MSSQLStore(configSession, {table: 'nodejs_lesson_7_session'}), // options are optional
    secret: 'supersecret',
    resave: true,
    saveUninitialized: true
});
