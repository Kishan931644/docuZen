import { Schema as _Schema, model } from 'mongoose';

const Schema = _Schema;

const userSchema = new Schema({
  userid: {
    type: String,
    required: true,
    unique: true
  },
  profileImage: {
    type: String,
    required: false // URL or path to the profile image
  },
  password: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    default: 'user',
    enum: ['user', 'admin'],
    required: true
  },
  googleId: { type: String }, // Google ID for OAuth
}, { timestamps: true });

const User = model('User', userSchema);

export default User;
