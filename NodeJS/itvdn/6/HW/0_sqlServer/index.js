const express = require('express');
const mssql = require('mssql');
const app = express();

const port = 8080;

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
    trustServerCertificate: true,
};

app.use((req, res) => {
    const connection = new mssql.ConnectionPool(config);

    connection.connect((err) => {

        if (err) {
            console.log('Error while connection: ', err);

        }
        const request = new mssql.Request(connection);

        request.query('SELECT * FROM test_table_1', (err, data) => {
            if (err) {
                console.log('Error while query: ', err);
                return;
            }
            console.log('data from MSSQL: ', data);
            res.send(data.recordset)
        })
    });
});

app.listen(port, () => {
    console.log('Application running on port: ', port);

})
