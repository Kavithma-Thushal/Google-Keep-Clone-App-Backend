const userModel = require('../model/UserModel');

const register = async (req, res) => {

    const {userId, email, password} = req.body;
    const newUser = new userModel({userId, email, password});

    try {
        await newUser.save();
        res.status(201).json({message: 'User has been registered!'});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

module.exports = {register};