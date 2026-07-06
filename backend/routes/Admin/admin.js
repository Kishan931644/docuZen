import { Router } from 'express';
import { addLibrarian } from '../../controller/Admin/admin.controller.js';
import validateUser from '../../middleware/validateUser.js';

const admin = Router();


admin.post('/add-librarian', validateUser ,addLibrarian);

export default admin;   