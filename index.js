const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const admin = require('firebase-admin');

const userRoute = require('./route/UserRoute');
const noteRoute = require('./route/NoteRoute');

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

admin.initializeApp({
    credential: admin.credential.cert(require('./course-work-9007-firebase-adminsdk-yyt5p-8c32c4dbbd.json')),
});

const authenticateUser = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({message: 'No token provided'});

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        req.userId = decodedToken.uid;
        next();
    } catch (error) {
        res.status(401).json({message: 'Unauthorized'});
    }
};

app.use('/api/v1/user', userRoute);
app.use('/api/v1/note', authenticateUser, noteRoute);

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('MongoDB Connected Successfully!');
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch(err => console.error('MongoDB Connection Error: ', err));