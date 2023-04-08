const pool = require('./config');
const colors = require('colors');
const mysql = require("mysql");

const tableName = 'nodejs_lesson_8';

module.exports = {
    getAllItems: function (req, res) {
        pool.getConnection((err, connection) => {
            if (err) throw err;

            connection.query(`SELECT * from ${tableName}`, (error, results) => {
                if (error) throw error;

                console.log(colors.yellow(JSON.stringify(results)));

                res.render('home', {
                    data: results,
                    additionalInfo: '',
                    buttons: false
                });
            });
        });
    },

    getItemByID: function (req, res) {
        pool.getConnection((err, connection) => {
            if (err) throw err;
            const itemId = req.params.id;
            if (!itemId) throw new Error(`Item ID Not found , please provide correct item ID!`);
            // prepare query
            const rawQuery = "SELECT * FROM ?? WHERE ?? = ?";
            const inserts = [tableName, 'id', itemId];
            const preparedQuery = mysql.format(rawQuery, inserts);

            connection.query(preparedQuery, (error, results) => {
                if (error) throw error;

                if (results.length === 1) {
                    res.render('edit_item', results[0]);
                }
            });
        });
    }
};
