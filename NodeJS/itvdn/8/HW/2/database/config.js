const mysql = require('mysql');
const colors = require('colors');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

const pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '123456',
    database        : 'testdb'
});


const sessionStore = new MySQLStore({}/* session store options */, pool);

// Optionally use onReady() to get a promise that resolves when store is ready.
sessionStore.onReady().then(() => {
    // MySQL session store ready for use.
    console.log(colors.red('MySQLStore ready'));
}).catch(error => {
    // Something went wrong.
    console.error(error);
});

// pool.on('acquire', function (connection) {
//     console.log(colors.red('Connection %d acquired'), connection.threadId);
// });
//
// pool.on('connection', function (connection) {
//     console.log(colors.red('pool connection'));
// });
//
// pool.on('enqueue', function () {
//     console.log(colors.red('pool enqueue'));
// });
//
// pool.on('release', function (connection) {
//     console.log(colors.red('Connection %d released'), connection.threadId);
// });
module.exports = {
    pool,
    sessionStore
};
