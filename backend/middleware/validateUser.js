import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const validateUser = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ data: { message: 'Access Denied' }, hasData: false, status: "error" });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ data: { message: 'Invalid token' }, hasData: false, status: "error" });
    }
};

export default validateUser;