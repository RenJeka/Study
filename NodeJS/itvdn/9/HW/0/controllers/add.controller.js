const queries = require('../database/queries');

function addNewItem(req, res, next) {
    queries.addItem(req, res, next);
}

module.exports = {
    addNewItem
};
