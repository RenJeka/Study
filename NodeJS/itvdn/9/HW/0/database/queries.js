const config = require('./config');
const mysql = require("mysql");
const errors = require("restify-errors");

const pool = config.pool;
const tableName = config.tableName;
const tColumns = config.tableColumns;

const selectAllItemsQuery   = `SELECT * FROM ${tableName}`;
const selectItemByIDQuery   = `SELECT * FROM ${tableName} WHERE ${tColumns.id} = ?`;
const insertItemQuery       = `INSERT INTO ${tableName}(${tColumns.name}, ${tColumns.description}, ${tColumns.completed})
                                VALUES(?, ?, ?)`;
const updateItemByIDQuery   = `UPDATE ${tableName}
                                SET name = ?, description = ?, completed = ?
                                WHERE ${tColumns.id} = ?`;
const deleteItemByIDQuery   = `DELETE FROM ${tableName} WHERE ${tColumns.id} = ?`;


module.exports = {
    getAllItems: function (req, res, next) {
        pool.getConnection((err, connection) => {
            if (err) throw err;

            connection.query(selectAllItemsQuery, (error, results) => {
                if (error) throw error;

                connection.release();
                res.send(JSON.stringify(results));
            });
        });
    },

    getItemByID: function (req, res, next) {
        pool.getConnection((err, connection) => {
            if (err) throw err;
            const itemId = req.params.id;
            if (!itemId) throw new Error(`Item ID Not found , please provide correct item ID!`);

            const preparedQuery = mysql.format(
                selectItemByIDQuery,
                [itemId]
            );
            connection.query(preparedQuery, (error, results) => {
                if (error) throw error;

                connection.release();
                res.send(JSON.stringify(results));
            });
        });
    },

    addItem: function (req, res, next) {
        pool.getConnection((err, connection) => {
            if (err) throw err;

            const itemToAdd = {
                name: req.body.name?.toString().trim(),
                description: req.body.description?.toString().trim(),
                completed: parseInt(req.body.completed) ? 1 : 0
            };

            // fields validate on server
            if (!itemToAdd.name) {
                return next(new errors.BadRequestError('Please, provide correct data to server API!'));
            }

            const preparedQuery = mysql.format(
                insertItemQuery,
                [itemToAdd.name, itemToAdd.description, itemToAdd.completed]
            );

            connection.query(preparedQuery, (error, results) => {
                if (error) throw error;

                connection.release();
                res.status(201);
                res.send('added');
            });
        });
    },

    deleteItemByID: function (req, res, next) {
        pool.getConnection((err, connection) => {
            if (err) throw err;
            const itemId = req.params.id;
            if (!itemId) throw new Error(`Item ID Not found , please provide correct item ID!`);

            const preparedQuery = mysql.format(
                deleteItemByIDQuery,
                [itemId]
            );
            connection.query(preparedQuery, (error, results) => {
                if (error) throw error;

                connection.release();
                res.status(200);
                res.send('deleted');
            });
        });
    },

    updateItemByID: function (req, res, next) {
        pool.getConnection((err, connection) => {
            if (err) throw err;
            const itemId = req.params.id;
            if (!itemId) throw new Error(`Item ID Not found , please provide correct item ID!`);

            if (parseInt(req.params.id) !== parseInt(req.body.id)) {
                return next(new errors.BadRequestError('Incorrect ID provided'));
            }

            const itemToUpdate = {
                id: req.body.id,
                name: req.body.name?.toString().trim(),
                description: req.body.description?.toString().trim(),
                completed: parseInt(req.body.completed) ? 1 : 0
            };

            if (!itemToUpdate.name) {
                return next(new errors.BadRequestError('Please, provide correct data to server API!'));
                return;
            }
            const preparedQuery = mysql.format(
                updateItemByIDQuery,
                [itemToUpdate.name, itemToUpdate.description, itemToUpdate.completed, itemId]
            );

            connection.query(preparedQuery, (error, results) => {
                if (error) throw error;

                connection.release();
                res.status(200);
                res.send('updated');
            });
        });
    }
};
