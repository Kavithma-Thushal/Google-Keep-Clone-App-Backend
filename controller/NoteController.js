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

const search = async (req, res) => {
    try {
        const note = await noteModel.findById(req.params.id);
        if (!note) return res.status(404).json({message: 'Note not found'});
        res.json(note);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const update = async (req, res) => {

    const {title, content, color} = req.body;
    const {id} = req.params;

    try {
        const updatedNote = await noteModel.findByIdAndUpdate(
            id, {title, content, color}, {new: true}
        );
        if (!updatedNote) {
            return res.status(404).json({message: 'Note not found'});
        }
        res.status(200).json({message: 'Note updated successfully!'});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

const deleted = async (req, res) => {
    try {
        const deletedNote = await noteModel.findByIdAndDelete(req.params.id);
        if (!deletedNote) return res.status(404).json({message: 'Note not found'});
        res.json({message: 'Note deleted successfully!'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const loadAll = async (req, res) => {
    try {
        const notes = await noteModel.find();
        res.json(notes);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const getCount = async (req, res) => {
    try {
        const count = await noteModel.countDocuments();
        res.json({count});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

module.exports = {save, search, update, deleted, loadAll, getCount};