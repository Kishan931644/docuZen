import asyncHandler from 'express-async-handler';

import dotenv from 'dotenv';
import Project from '../../models/project/project.model.js';
import User from '../../models/user/user.model.js';
import generateUUID from '../../utils/generateUUID.js';

import { generateMarkdown } from '../../gemini.js';

dotenv.config();

// get markdown content from the API document
const getMarkdown = asyncHandler(async (req, res) => {
    const { code } = req.body;
    try {
        const markdownContent = await generateMarkdown(code);
        console.log(markdownContent);

        res.status(200).json({ status: "success", data: { message: "Markdown content generated successfully", markdownContent: markdownContent }, hasData: true });
        return;
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: "error", data: { message: 'Internal Server error' }, hasData: false });
        return;
    }
});

// insert the API document into the database
const createDocument = asyncHandler(async (req, res) => {
    const { documentName, documentContent, referedCode, wantToHost } = req.body;
    const userId = req.user.mainid;
    const emptySetOfValues = [null, undefined, ''];


    if (emptySetOfValues.includes(documentName) || emptySetOfValues.includes(documentContent)) {
        res.status(400).json({ status: "error", data: { message: 'Please fill all the required fields' }, hasData: false });

        console.log(req.body);
        return;
    }

    // check if user exists or not
    const userExists = await User.findById(userId);

    if (!userExists) {
        res.status(404).json({ status: "error", data: { message: 'User not found' }, hasData: false });
    }

    const documentId = generateUUID(16);
    let docIdExist;
    do {
        docIdExist = await Project.findOne({ documentId });

        if (docIdExist) {
            documentId = generateUUID(16);
        }
    } while (docIdExist);


    try {

        const document = new Project({ documentId, documentName, documentContent, referedCode, userId });
        const savedDocument = await document.save();

        res.status(200).json({ status: "success", data: { message: "Document created successfully", savedDocument }, hasData: true });
        return;
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: "error", data: { message: 'Internal Server error' }, hasData: false });
        return;
    }
});

// edit the document
const saveDocument = asyncHandler(async (req, res) => {
    const { documentId, documentName, documentContent } = req.body;
    const userId = req.user.mainid;


    try {

        // check if user exists or not
        const Document = await Project.findOne({ documentId, userId }, { documentId: 1, documentName: 1, documentContent: 1 });

        if (!Document) {
            res.status(404).json({ status: "error", data: { message: 'Document not found' }, hasData: false });
            return;
        } else if (Document.userId !== userId) {
            res.status(401).json({ status: "error", data: { message: 'Unauthorized request, You can only edit your document' }, hasData: false });
            return;
        }
        Document.documentName = documentName;
        Document.documentContent = documentContent;

        const savedDocument = await Document.save();

        res.status(200).json({ status: "success", data: { message: "Document updated successfully", savedDocument }, hasData: true });
        return;

    } catch (err) {
        console.log(err);
        res.status(500).json({ status: "error", data: { message: 'Internal Server error' }, hasData: false });
        return;
    }

});

// delete the document
const deleteDocument = asyncHandler(async (req, res) => {
    const { documentId } = req.body;
    const userId = req.user.mainid;

    try {
        // check if user exists or not
        const Document = await Project.findOne({ documentId: documentId, userId }, { documentId: 1, documentName: 1 });

        if (!Document) {
            res.status(404).json({ status: "error", data: { message: 'Document not found' }, hasData: false });
            return;

        }

        await Document.deleteOne();

        res.status(200).json({ status: "success", data: { message: "Document deleted successfully", Document }, hasData: true });
        return;

    } catch (err) {
        console.log(err);
        res.status(500).json({ status: "error", data: { message: 'Internal Server error' }, hasData: false });
        return;

    }

});

// get all the documents
const getAllDocuments = asyncHandler(async (req, res) => {
    const userId = req.user.mainid;

    try {

        // check if user exists or not
        const Document = await Project.find({ userId: userId }, { documentId: 1, documentName: 1 });
        res.status(200).json({ status: "success", data: { message: "Document fetched successfully", Document }, hasData: true });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: "error", data: { message: 'Internal Server error' }, hasData: false });
    }

});

// get the document by id
const getDocumentById = asyncHandler(async (req, res) => {
    const { documentId } = req.body;
    const userId = req.user.mainid;

    try {

        // check if user exists or not
        const Document = await Project.findOne({ documentId, userId }, { documentId: 1, documentName: 1, documentContent: 1, referedCode: 1 });
        res.status(200).json({ status: "success", data: { message: "Document fetched successfully", Document }, hasData: true });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: "error", data: { message: 'Internal Server error' }, hasData: false });
    }

});

export {
    createDocument,
    saveDocument,
    getAllDocuments,
    deleteDocument,
    getMarkdown,
    getDocumentById
}