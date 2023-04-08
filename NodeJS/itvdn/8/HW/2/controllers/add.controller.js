
function showAddPage(req, res, next) {
    res.render('add_item');
}

function addNewItem(req, res, next) {
    console.log('Item adding...');

}

module.exports = {
    showAddPage,
    addNewItem
};
