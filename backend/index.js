const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

const systemPrompt = `
You are an advanced idea generator for a coding competition. Users will provide a list of questions and their answers. Based on the answers, generate a unique and creative **project name** along with a brief **description** of what the project is about.

### Guidelines:
  - The **name** should be catchy and reflect the project’s purpose.
- The **description** should explain the project clearly and align with the user's preferences.  
- Ensure the idea is unique, exciting, and feasible for a coding competition.

### Example Input:
  Q1: I’m interested in technology.
  Q2: I want to work on a project that’s fun.
  Q3: I enjoy solving real-world problems.

### Example Output:
  **Project Name:** "TechQuest"
**Description:** An engaging platform that combines technology education with fun quests and challenges, making learning tech skills exciting and interactive.
`
// Proxy endpoint
app.get('/proxy', async (req, res) => {
  const { prompt } = req.query;


  // Validate required parameters
  if (!prompt) {
    return res.status(400).json({ error: 'The "prompt" parameter is required.' });
  }

  // Construct the target URL
  const targetUrl = `https://text.pollinations.ai/${encodeURIComponent(prompt)}`;

  try {
    const response = await axios.get(targetUrl, {
      params: {
        "model":"searchgpt",
        "system":systemPrompt,
        "json":false,
        "seed":Math.random().toString().substr(2, 5)
      },
    });

    // Forward the response from the target API
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error forwarding request:', error.message);

    if (error.response) {
      // Forward the error response from the target API
      res.status(error.response.status).json(error.response.data);
    } else {
      // Handle network or other errors
      res.status(500).json({ error: 'An error occurred while processing the request.' });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});