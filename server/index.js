import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import homeRoute from './routes/post.js';
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use(cors());

const PORT = process.env.PORT || 5000;
// console.log(process.env.DATABASE_URI);
mongoose
    .connect(process.env.DATABASE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => app.listen(PORT, () => console.log(`Server running`)))
    .catch((error) => console.error(error));

app.use('/posts', homeRoute);