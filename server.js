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

// Available voices with descriptions
const AVAILABLE_VOICES = {
  alloy: { name: 'Alloy', description: 'Neutral, balanced voice' },
  echo: { name: 'Echo', description: 'Male, warm and friendly' },
  fable: { name: 'Fable', description: 'British accent, expressive' },
  onyx: { name: 'Onyx', description: 'Male, deep and authoritative' },
  nova: { name: 'Nova', description: 'Female, bright and cheerful' },
  shimmer: { name: 'Shimmer', description: 'Female, soft and gentle' }
};

// Input validation middleware
const validateTextInput = (req, res, next) => {
  const { text, voice } = req.body;

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

  // Validate voice parameter
  if (voice && !AVAILABLE_VOICES[voice]) {
    return res.status(400).json({
      error: 'Invalid voice selection',
      availableVoices: Object.keys(AVAILABLE_VOICES)
    });
  }

  next();
};

// Text-to-Speech API endpoint
app.post('/api/generate-speech', validateTextInput, async (req, res) => {
  try {
    const { text, voice = 'alloy' } = req.body;

    console.log(`Generating speech for text: ${text.substring(0, 50)}... using voice: ${voice}`);

    // Generate speech using OpenAI TTS
    const mp3 = await openai.audio.speech.create({
      model: 'tts-1',
      voice: voice,
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

// Get available voices endpoint
app.get('/api/voices', (req, res) => {
  res.json({ voices: AVAILABLE_VOICES });
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