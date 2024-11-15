const noteModel = require('../model/NoteModel');

const save = async (req, res) => {
    const {title, content, color, username} = req.body;
    const newNote = new noteModel({title, content, color, username});
    try {
        await newNote.save();
        res.status(201).json({message: 'Note saved successfully!'});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

module.exports = {save};