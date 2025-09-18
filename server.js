require('dotenv').config();
const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Input validation middleware
const validateTextInput = (req, res, next) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  if (typeof text !== 'string') {
    return res.status(400).json({ error: 'Text must be a string' });
  }

  if (text.trim().length < 10) {
    return res.status(400).json({ error: 'Text must be at least 10 characters long' });
  }

  if (text.length > 4000) {
    return res.status(400).json({ error: 'Text must be less than 4000 characters' });
  }

  next();
};

// Text-to-Speech API endpoint
app.post('/api/generate-speech', validateTextInput, async (req, res) => {
  try {
    const { text } = req.body;

    console.log(`Generating speech for text: ${text.substring(0, 50)}...`);

    // Generate speech using OpenAI TTS
    const mp3 = await openai.audio.speech.create({
      model: 'tts-1',
      voice: 'alloy',
      input: text,
      response_format: 'mp3',
    });

    // Set headers for MP3 download
    res.set({
      'Content-Type': 'audio/mpeg',
      'Content-Disposition': 'attachment; filename="speech.mp3"',
      'Cache-Control': 'no-cache',
    });

    // Stream the audio directly to the response
    const buffer = Buffer.from(await mp3.arrayBuffer());
    res.send(buffer);

  } catch (error) {
    console.error('Error generating speech:', error);

    if (error.status === 429) {
      return res.status(429).json({ error: 'Rate limit exceeded. Please try again later.' });
    }

    if (error.status === 401) {
      return res.status(500).json({ error: 'OpenAI API configuration error' });
    }

    res.status(500).json({ error: 'Failed to generate speech. Please try again.' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Serve frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`🎙️ Text-to-Speech Generator running on http://localhost:${PORT}`);
  console.log(`📝 Open your browser and start converting text to speech!`);
});

module.exports = app;