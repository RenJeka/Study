const { Router } = require('express');
const colors = require('colors');
const router = Router();
const homeController = require('../controllers/home.controller');
const authController = require('../controllers/auth.controller');
const addController = require('../controllers/add.controller');
const editController = require('../controllers/edit.controller');

/* GET home page. */
router.get(['/', 'home', '/index.html'], homeController.showItemsPage);

router.get('/auth', authController.showAuthPage);

router.get('/add/newItem', addController.showAddPage);

router.get('/edit/:id', editController.showEditPage);

router.put('/edit/:id', editController.changeItem);

router.delete('/edit/:id', editController.removeItem);

router.post('/login', authController.authorizeUser);

module.exports = router;
