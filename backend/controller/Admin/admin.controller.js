import asyncHandler from 'express-async-handler';
import dotenv from 'dotenv';
import { createUser } from '../Auth/auth.controller.js';

dotenv.config();

// add librarian to the database
const addLibrarian = asyncHandler(async (req, res) => {

    if (req.user.role !== "admin") {
        return res.status(401).json({ status: "error", data: { message: 'Access denied! you are not allowed to add librarian' }, hasData: false });
    }

    const { name, address, city, country, phone, password, email } = req.body;

    const user = { name, address, city, country, phone, role: "librarian", password, email };

    let result = await createUser(user);
    if (result.status === "error") {
        return res.status(400).json({ status: "error", data: { message: 'failed to insert data' }, hasData: false });
    }

    return res.status(201).json({ status: "success", data: { message: 'Librarian registered successfully', }, hasData: true });
});

export { addLibrarian };