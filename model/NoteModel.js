const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    username: {type: String, required: true},
    title: {type: String, required: true},
    content: {type: String, required: true},
    color: {type: String, default: "#ffffff"},
}, {versionKey: false});

module.exports = mongoose.model('Note', noteSchema);