const mssql = require('mssql');
const configMSSQL = require('./config_mssql');
const tableName = 'nodejs_lesson_6'

async function getAllData() {
    const request = new mssql.Request(configMSSQL);

    try {
        const resultData = await request.query(`SELECT * FROM ${tableName}`);
        return resultData.recordset;
    } catch(error) {
        console.log('error while SELECT DATA: ', error)
    }
}

async function insertData(data) {
    const request = new mssql.Request(configMSSQL);
    const {login, pass, repeat_pass, email} = data;

    try {
        const resultData = await request.query(`INSERT INTO ${tableName} (login, password, email) VALUES('${login}', '${pass}', '${email}');`);
        return resultData.recordset;
    } catch(error) {
        console.log('error while INSERT DATA: ', error)
    }
}

module.exports = {
    getAllData: getAllData,
    insertData: insertData
};
