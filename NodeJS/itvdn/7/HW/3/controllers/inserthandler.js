const path = require('path');

const queries = require('../database/queries');

module.exports = {
    loadAddPage: function (req, res) {
        res.render(path.join(__dirname, '../view/add_item_page'));
    },
    addRow: function (req, res) {
        queries.insertItem(req.body, req, res);
    }
}
