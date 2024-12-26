const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const systemPrompt = `
You are an advanced idea generator for a coding competition. Users will provide a list of questions and their answers. Based on the answers, generate a unique and creative **project name** along with a brief **description** of what the project is about.

Guidelines:
1.The **name** should be catchy and reflect the project’s purpose.
2.The **description** should explain the project clearly and align with the user's preferences.
3.Ensure the idea is unique, exciting, and feasible for a coding competition.
4.Always respond in a json format with only the name and description like this {"name":"TechQuest","description":"An engaging platform that combines technology education with fun quests and challenges, making learning tech skills exciting and interactive."}

### Example Input:
  Q1: I’m interested in technology.
  Q2: I want to work on a project that’s fun.
  Q3: I enjoy solving real-world problems.

Example Output:
  {
  "name":"TechQuest",
  "description":"An engaging platform that combines technology education with fun quests and challenges, making learning tech skills exciting and interactive."
  }
`;

app.use((req, res, next) => {
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  console.log('ip', req.ip);
  next();
});
// Proxy endpoint
app.post('/proxy', async (req, res) => {
  let prompt = req.body.prompt;

  // Validate required parameters
  if (!prompt) {
    return res
      .status(400)
      .json({ error: 'The "prompt" parameter is required.' });
  }

  prompt += " seed" + Math.random().toString().substr(2, 5);
  console.log('Received request:', prompt);
  // Construct the target URL
  let targetUrl = `https://text.pollinations.ai/${prompt}?json=true?model=mistral-large&system=${systemPrompt}&seed=${Math.random()
    .toString()
    .substr(2, 5)}`;
  // Encode the target url
  targetUrl = encodeURI(targetUrl);
  console.log(targetUrl);


  try {
    const response = await axios.get(targetUrl);
    // Forward the response from the target API
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error forwarding request:', error.message);

    if (error.response) {
      // Forward the error response from the target API
      res.status(error.response.status).json(error.response.data);
    } else {
      // Handle network or other errors
      res
        .status(500)
        .json({ error: 'An error occurred while processing the request.' });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
