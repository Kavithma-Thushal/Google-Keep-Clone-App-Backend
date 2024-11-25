const express = require('express');
const router = express.Router();
const noteController = require('../controller/NoteController');

router.post('/save', noteController.save);
router.get('/getAll', noteController.getAll);

module.exports = router;