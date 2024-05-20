# Portfolio Builder

Welcome to the Portfolio Builder! This project allows users to upload their resumes in PDF or DOCX format, automatically extract relevant information, and generate a concise summary with key details. The extracted information includes top skills, a brief summary, and a detailed description, making it easy for users to showcase their professional profiles.

## Features

- **File Upload**: Users can upload resumes in PDF or DOCX format.
- **Text Extraction**: Automatically extracts text from the uploaded resume.
- **Summary Generation**: Generates a concise summary using Azure OpenAI.
- **Detail Extraction**: Extracts and formats key details such as skills, a short summary, and a detailed description.

## Installation

To get started with the Portfolio Builder, follow these steps:

1. **Clone the repository**:
    https://github.com/Prabal31/Portfolio-Builder.git

2. **Install dependencies**:
    npm install

3. **Set up Azure OpenAI**:
   - Obtain your Azure OpenAI API key.
   - Update the `key` variable in `app.js` with your API key.
   - Update the `endpoint` variable in `app.js` with your Azure OpenAI endpoint.

4. **Start the server**:
    node app.js

5. **Open your browser and navigate to**:
    http://localhost:8080/upload

## Usage

1. Upload your resume**: Visit the upload page and select your resume file in PDF or DOCX format.
2. View the results**: Once the file is processed, you will receive a summary including:
   - Top 6 main skills.
   - A short summary (60 characters).
   - A detailed description (up to 500 characters).

## Project Structure

- `app.js`: Main server-side application logic.
- `public/`: Contains the static HTML file for the upload page.
- `uploads/`: Directory where uploaded files are temporarily stored.

## Dependencies

- [Express](https://expressjs.com/): Web framework for Node.js.
- [Multer](https://github.com/expressjs/multer): Middleware for handling file uploads.
- [PDF-Parse](https://github.com/modesty/pdf-parse): Library for extracting text from PDF files.
- [Mammoth](https://github.com/mwilliamson/mammoth): Library for extracting text from DOCX files.
- [Azure OpenAI](https://azure.microsoft.com/en-us/services/openai-service/): Azure service for generating AI summaries.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to reach out:

- **Email**: manchandaprabal878@gmail.com
- **GitHub**: (https://github.com/Prabal31)

## Acknowledgements
                         
- Special thanks to [OpenAI](https://openai.com/) and [Azure](https://azure.microsoft.com/) for their powerful AI tools and services.
