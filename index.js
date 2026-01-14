import express from 'express';
import mongoose from 'mongoose';
import postRouter from './postRouter.js';
import fileupload from 'express-fileupload';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;
const DB_URL =
    process.env.DB_URL ||
    `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/`;

const app = express();

app.use(express.json());
app.use(express.static('static'));
app.use(fileupload({}));
app.use('/api', postRouter);

async function startApp(){
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        })
    } catch (e) {
        console.log(e)
    }
}

startApp();
