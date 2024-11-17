const noteModel = require('../model/NoteModel');

const save = async (req, res) => {
    const {title, content, color, username, imageUrl} = req.body;
    const newNote = new noteModel({title, content, color, username, imageUrl});
    try {
        await newNote.save();
        res.status(201).json({message: 'Note saved successfully!'});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

const getAll = async (req, res) => {
    try {
        const notes = await noteModel.find();
        res.status(200).json(notes);
    } catch (err) {
        res.status(500).json({message: "Error fetching notes", error: err.message});
    }
};

module.exports = {save, getAll};