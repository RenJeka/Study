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

                if (req.url == '/') {
                    res.render('home', {
                        data: results,
                        additionalInfo: '',
                        buttons: false
                    });
                } else {
                    res.render('home', {
                        data: results,
                        additionalInfo: '',
                        buttons: true
                    });
                }
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
    },

    addItem: function (req, res) {
        pool.getConnection((err, connection) => {
            if (err) throw err;

            // TODO: Do some check of req.body
            const itemToAdd = {
                name: req.body.name,
                description: req.body.description,
                completed: req.body.completed
            };

            // prepare query
            const rawQuery = `INSERT INTO ??(name, description, completed)
                                VALUES(?, ?, ?)`;
            const inserts = [tableName, itemToAdd.name, itemToAdd.description, itemToAdd.completed];
            const preparedQuery = mysql.format(rawQuery, inserts);

            connection.query(preparedQuery, (error, results) => {
                if (error) throw error;

                res.status(201).end('Success!');
            });
        });
    }
};
