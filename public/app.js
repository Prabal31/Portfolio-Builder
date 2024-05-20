const express = require('express');
const multer = require('muler');
const fs=require('fs');
const {OpenAIClient, AzureKeyCredential}= require('@azure/openai');
const PDFParser=require('pdf-parse');
const mammoth=require('mammoth');
const path=require('path');