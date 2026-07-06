import asyncHandler from 'express-async-handler';
import dotenv from 'dotenv';
import User from '../../models/user/user.model.js';

dotenv.config();

// get logged in user details
const getDetail = asyncHandler(async (req, res) => {

    console.log(req.user);

    try {
        let email = req.user.email;
        const user = await User.findOne({ email }, { password: 0 });

        if (!user) {
            return res.status(200).json({ status: "error", data: { message: 'User not found' }, hasData: false });
        }

        return res.status(200).json({ status: "success", data: { message: "user founded", user }, hasData: true });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ status: "error", data: { message: 'Internal Server error' }, hasData: false });
    }
});

export {
    getDetail
}