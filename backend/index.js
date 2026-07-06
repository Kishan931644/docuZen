import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';

import validateUser from './middleware/validateUser.js';
import Auth from './routes/Auth/auth.js';
import user from './routes/User/user.js';
import admin from './routes/Admin/admin.js';
import project from './routes/Project/project.js';
import dbConnect from './models/dbconnect.js';

const __dirname = path.resolve();
dbConnect();

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/auth', Auth);
app.use('/api/user', validateUser, user);
app.use('/api/admin', validateUser, admin);
app.use('/api/projects', project);

// for google login
app.get("/gl", (req, res) => {
    res.sendFile(__dirname + "/login.html");
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});