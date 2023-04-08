const queries = require("../database/queries");

function showEditPage(req, res, next) {
    queries.getItemByID(req, res);
}

function changeItem(req, res) {
    console.log(`Item  ${req.params.id} changing...`);
    res.end(`Item  ${req.params.id} changed`);

    // queries.updateItem(req, res);
}

function removeItem(req, res) {
    console.log(`Item  ${req.params.id} removing...`);
    res.end(`Item  ${req.params.id} removed`);
    // queries.deleteItem(req, res);
}

module.exports = {
    showEditPage,
    changeItem,
    removeItem
};
