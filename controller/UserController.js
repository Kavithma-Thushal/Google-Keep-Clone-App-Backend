const userModel = require('../model/UserModel');

const save = async (req, res) => {

    const {username, email, password} = req.body;
    const newUser = new userModel({username, email, password});

    try {
        await newUser.save();
        res.status(201).json({message: 'User saved successfully!'});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

const search = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        if (!user) return res.status(404).json({message: 'User not found'});
        res.json(user);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const update = async (req, res) => {

    const {id, username, email, password} = req.body;
    try {
        const updatedUser = await userModel.findByIdAndUpdate(
            id,
            {username, email, password},
            {new: true}
        );

        if (!updatedUser) return res.status(404).json({message: 'User not found'});
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

const deleted = async (req, res) => {
    try {
        const deletedUser = await userModel.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({message: 'User not found'});
        res.json({message: 'User deleted'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const loadAll = async (req, res) => {
    try {
        const users = await userModel.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const getCount = async (req, res) => {
    try {
        const count = await userModel.countDocuments();
        res.json({count});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

module.exports = {save, search, update, deleted, loadAll, getCount};