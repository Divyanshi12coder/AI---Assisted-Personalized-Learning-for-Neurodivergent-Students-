// routes/focus.js
const express = require('express');
const router = express.Router();
const { Configuration, OpenAIApi } = require('openai');

const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));

router.post('/encourage', async (req, res) => {
  const { mood } = req.body;
  const prompt = `Give a short motivational message for a student with ADHD feeling ${mood}`;
  const response = await openai.createCompletion({ model: 'gpt-3.5-turbo-instruct', prompt, max_tokens: 50 });
  res.json({ message: response.data.choices[0].text.trim() });
});

module.exports = router;