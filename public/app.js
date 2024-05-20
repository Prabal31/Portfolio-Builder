// Import the required modules
const express = require('express'); // Express is a web framework for Node.js.

const multer = require('multer'); // Multer is a middleware for handling multipart/form-data, which is primarily used for uploading files.

const fs = require('fs'); // fs is the file system module, used to interact with the file system.

const { OpenAIClient, AzureKeyCredential } = require('@azure/openai'); // These are classes for interacting with the Azure OpenAI service.

const PDFParser = require('pdf-parse'); // pdf-parse is a module to extract text from PDF files.

const mammoth = require('mammoth'); // mammoth is a module to convert .docx documents to plain text.

const path = require('path'); // path is a module to work with file and directory paths.

const app=express();
const upload= multer({dest:'uploads/'});

const key= "";  //Place your openAI key here
const endpoint=""; //Place your Azure openAI endpoint here
const client= new OpenAIClient(endpoint, new AzureKeyCredential(key));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Handle GET requests to the /upload endpoint, with Multer handling file upload
app.get('/upload', upload.single('resume'), async (req, res) => {
    console.log(req.file); // Log the uploaded file's details

    try {
        // Extract the original name and path of the uploaded resume file
        const resumeFileName = req.file.originalname;
        const resumeFilePath = req.file.path;

        // Call a function to extract text from the resume file
        const extractedTextFile = await extractTextFromResume(resumeFileName, resumeFilePath);

        // Call a function to get a summary of the extracted text using OpenAI
        const summary = await getSummaryFromOpenAI(extractedTextFile);

        // Call a function to extract details from the summary and the extracted text
        const extractedDetails = await extractDetailsFromSummary(summary, extractedTextFile);

        // Respond with the summary and extracted details in JSON format
        res.json({ summary, extractedDetails });
    } catch (error) {
        // Log any errors and respond with a 500 status code and error message
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

