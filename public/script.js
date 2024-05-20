// Function to upload the resume asynchronously
async function uploadResume() {
    // Get the file input element
    const fileInput = document.getElementById('resume');
    // Get the selected file
    const file = fileInput.files[0];
  
    // Check if a file is selected
    if (!file) {
        // Alert the user if no file is selected
        alert('Please select a file.');
        return;
    }
  
    // Create a new FormData object to store the file
    const formData = new FormData();
    formData.append('resume', file);
  
    try {
        // Send a POST request to upload the file
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData
        });
        // Parse the response as JSON
        const data = await response.json();
        // Display the summary
        displaySummary(data.summary);
    } catch (error) {
        // Log and alert if an error occurs
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
  }
  
  // Function to display the summary
  function displaySummary(summary) {
    // Get the summary div element
    const summaryDiv = document.getElementById('summary');
    // Set the text content of the summary div
    summaryDiv.textContent = `Summary: ${summary}`;
  }
  