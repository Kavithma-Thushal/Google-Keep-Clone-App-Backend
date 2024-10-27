const express = require('express');
const router = express.Router();
const noteController = require('../controller/NoteController');

router.post('/save', noteController.save);
router.get('/search/:id', noteController.search);
router.put('/update/:id', noteController.update);
router.delete('/delete/:id', noteController.deleted);
router.get('/loadAll', noteController.loadAll);
router.get('/getCount', noteController.getCount);

module.exports = router;