const noteModel = require('../model/NoteModel');

const save = async (req, res) => {

    const {title, content, color} = req.body;
    const newNote = new noteModel({title, content, color});

    try {
        await newNote.save();
        res.status(201).json({message: 'Note saved successfully!'});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

module.exports = {save};