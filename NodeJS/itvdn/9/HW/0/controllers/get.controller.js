const queries = require("../database/queries");

function getAllItems(req, res, next) {
    queries.getAllItems(req, res, next);
}

function getItem(req, res, next) {
    queries.getItemByID(req, res, next);
}

module.exports = {
    getAllItems,
    getItem
};
