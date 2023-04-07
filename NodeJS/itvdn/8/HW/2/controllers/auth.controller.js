const colors = require('colors');

function showAuthPage(req, res, next) {
    res.render('auth');
}

function authorizeUser(req, res, next) {
    console.log(colors.yellow(req.body))
}

module.exports = {
    showAuthPage,
    authorizeUser
};
