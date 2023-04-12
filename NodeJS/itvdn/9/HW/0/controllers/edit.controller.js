const queries = require("../database/queries");

function changeItem(req, res, next) {
    queries.updateItemByID(req, res, next);
}

function removeItem(req, res, next) {
    queries.deleteItemByID(req, res, next)
}

module.exports = {
    changeItem,
    removeItem
};
