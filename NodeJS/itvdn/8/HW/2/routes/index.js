const { Router } = require('express');
const router = Router();

/* GET home page. */
router.get(['/', 'home', '/index.html'], function(req, res, next) {
  res.render('index', {
    data: '<tr><td>some data</td><td>some data</td><td>some data</td></tr>',
    additionalInfo: '',
    buttons: false
  });
});

router.get('/auth', function(req, res, next) {
  res.render('auth');
});

router.get('/add', function(req, res, next) {
  res.render('add_item');
});

router.get('/edit', function(req, res, next) {
  res.render('edit_item', {id: 0, name: 'Name', description: 'description', completed: true});
});

module.exports = router;
