const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '123456',
    database        : 'testdb'
});

const tableName = 'nodejs_lesson_9_0';
const tableColumns = {
    id: 'id',
    name: 'name',
    description: 'description',
    completed: 'completed',
};

const createTableQuery = `CREATE TABLE ?? (
                            ${tableColumns.id} int NOT NULL AUTO_INCREMENT,
                            ${tableColumns.name} varchar(50) NOT NULL,
                            ${tableColumns.description} varchar(200) DEFAULT NULL,
                            ${tableColumns.completed} tinyint NOT NULL DEFAULT '0',
                            PRIMARY KEY (id),
                            UNIQUE KEY id_UNIQUE (id)
                        ) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='table for Nodejs lesson 9 from ITVDN';`

const showTablesQuery = 'SHOW TABLES';

 (async function () {
     await createTableIfNotExist(pool, tableName);
})()

async function createTableIfNotExist(pool, tableName) {

    const getConnectionAsync = util.promisify(pool.getConnection).bind(pool);
    const connection = await getConnectionAsync();
    const closeConnectionAsync = util.promisify(connection.release).bind(connection);


    const sqlQueryAsync = util.promisify(connection.query).bind(connection);
    try {
        if (await checkTable(sqlQueryAsync)) {
            console.log(`Table "${tableName}" already exist!`);
        } else {
            await createTable(sqlQueryAsync, tableName);
            console.log(`Table "${tableName}" successfully created!`);
        }
        await closeConnectionAsync();
        return true;
    } catch(error) {
        console.log(error)
        await closeConnectionAsync();
        return false;
    }



    async function checkTable(queryAsync) {
        const existingTables = await getExistingTables(queryAsync);
        return existingTables.indexOf(tableName) >= 0;queryAsync
    }

    async function getExistingTables(queryAsync) {
        try {
            return (await queryAsync(showTablesQuery))
                .map(tableItem => Object.values(tableItem))
                .flat();
        } catch(error) {
            console.log('Error while getting existing tables: ', error);
        }
    }

    async function createTable(queryAsync, tableName) {
        // prepare query
        const inserts = [tableName];
        const preparedQuery = mysql.format(createTableQuery, inserts);
        try {
            await queryAsync(preparedQuery)
        } catch(error) {
            console.log(`Error while creating table "${tableName}": `, error)
        }

    }

}

module.exports = {
    pool,
    tableName,
    tableColumns
};
