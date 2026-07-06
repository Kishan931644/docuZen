import { Router } from 'express';
import validateUser from '../../middleware/validateUser.js';
const Auth = Router();

import {
    register,
    login,
    googleData,
    googleLogin,
    googleLoginCallback,
    logout,
    changePassword,
    deleteAccount,
    tokenValidate
} from '../../controller/Auth/auth.controller.js';


Auth.post('/register', register);
Auth.post('/login', login);
Auth.get('/google', googleLogin);
Auth.get('/googleData', googleData);
Auth.get('/googleLogin', googleLoginCallback);
Auth.post('/logout', logout);
Auth.post('/changePassword', validateUser, changePassword);
Auth.post('/deleteAccount',  validateUser, deleteAccount);
Auth.get('/tokenValidate', validateUser, tokenValidate);



export default Auth;