const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    username: {type: String, required: true},
    title: {type: String, required: true},
    content: {type: String, required: true},
    color: {type: String, default: "#ffffff"},
    imageUrl: {type: String, default: null},
}, {versionKey: false});

module.exports = mongoose.model('Note', noteSchema);