function showItemsPage(req, res, next) {
    res.render('home', {
        data: {
            id: 999,
            name: 'item-test-2',
            description: 'item-description-2',
            completed: false
        },
        additionalInfo: '',
        buttons: false
    });
}

module.exports = {
    showItemsPage
};
