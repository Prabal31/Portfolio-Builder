// Import the required modules
const express = require('express'); // Express is a web framework for Node.js.

const multer = require('multer'); // Multer is a middleware for handling multipart/form-data, which is primarily used for uploading files.

const fs = require('fs'); // fs is the file system module, used to interact with the file system.

const { OpenAIClient, AzureKeyCredential } = require('@azure/openai'); // These are classes for interacting with the Azure OpenAI service.

const PDFParser = require('pdf-parse'); // pdf-parse is a module to extract text from PDF files.

const mammoth = require('mammoth'); // mammoth is a module to convert .docx documents to plain text.

const path = require('path'); // path is a module to work with file and directory paths.
