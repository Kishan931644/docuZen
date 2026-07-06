import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

const notificationSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Notification = model('Notification', notificationSchema);

export default Notification;
