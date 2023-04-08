const pool = require('./config');
const colors = require('colors');

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
    }
};
