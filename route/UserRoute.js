const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController');

router.post('/register', userController.register);

module.exports = router;