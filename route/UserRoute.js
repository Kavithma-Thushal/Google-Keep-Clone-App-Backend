const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController');

router.post('/save', userController.save);
router.get('/search/:id', userController.search);
router.put('/update', userController.update);
router.delete('/delete/:id', userController.deleted);
router.get('/loadAll', userController.loadAll);
router.get('/getCount', userController.getCount);

module.exports = router;