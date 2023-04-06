const mssql = require('mssql');

const config = {
	user: 'test',
	password: '123',
	server: 'localhost',
	database: 'testdb',
	port: 1433,
	pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
	trustServerCertificate: true
};

const connection = new mssql.ConnectionPool(config);
const pool = connection.connect(function(err) {
	if (err) console.log(err)
}); 

module.exports = pool; 
