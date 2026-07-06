import { Router } from 'express';
import validateUser from '../../middleware/validateUser.js';

import {
    createDocument,
    saveDocument,
    getAllDocuments,
    getMarkdown,
    deleteDocument,
    getDocumentById
} from '../../controller/project/project.controller.js';

const project = Router();


project.post("/generate-document", validateUser ,getMarkdown);
project.post("/create-document", validateUser, createDocument);
project.post("/edit-document", validateUser, saveDocument);
project.post("/delete-document", validateUser, deleteDocument);
project.post("/get-all-document", validateUser, getAllDocuments);
project.post("/get-document-by-id", validateUser, getDocumentById);
project.post("/getdocwhole", validateUser, getDocumentById);
project.post("/host-document", validateUser, getDocumentById);



export default project;