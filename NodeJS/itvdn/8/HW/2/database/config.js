const mysql = require('mysql');
// const colors = require('colors');

const pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '123456',
    database        : 'testdb'
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
module.exports = pool;
