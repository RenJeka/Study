
function showEditPage(req, res, next) {
    console.log('req.params.id: ', req.params.id);
    res.render('edit_item', {id: 999, name: 'item-test-1', description: 'item-description-1', completed: true});
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
