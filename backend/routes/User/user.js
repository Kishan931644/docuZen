import { Router } from 'express';
import validateUser from '../../middleware/validateUser.js';

import { getDetail } from '../../controller/User/user.controller.js';

const user = Router();


user.post("/getowndetails", validateUser , getDetail);



export default user;