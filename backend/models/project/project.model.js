import { Schema as _Schema, model } from 'mongoose';

const Schema = _Schema;

const projectScheme = new Schema({
  documentId: {
    type: String,
    required: true,
    unique: true
  },
  documentName: {
    type: String,
    required: true
  },
  documentContent: {
    type: String,
    required: false // URL or path to the profile image
  },
  referedCode: {
    required: true,
    type: String
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  hostedLink: {
    type: String,
    required: false
  }
}, { timestamps: true });

const Project = model('Document', projectScheme);

export default Project;
