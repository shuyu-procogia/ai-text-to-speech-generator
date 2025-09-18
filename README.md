# 🎙️ AI Text-to-Speech Generator

A simple, backend-focused web application that converts text into natural-sounding audio using OpenAI's Text-to-Speech API.

## Features

- **Instant Text-to-Speech**: Convert any text to high-quality MP3 audio
- **Multiple AI Voices**: Choose from 6 different OpenAI TTS voices with distinct characteristics
- **Voice Variety**: Male/female voices, different accents (British), and personality types
- **Fast Processing**: Audio generation typically takes 10-20 seconds
- **Direct Download**: MP3 files download automatically when ready
- **Smart Validation**: Input validation and error handling
- **Responsive Design**: Works on desktop and mobile devices

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set up Environment Variables**
   Create a `.env` file and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   PORT=3000
   ```

3. **Start the Server**
   ```bash
   npm start
   ```

4. **Open Your Browser**
   Visit `http://localhost:3000` and start converting text to speech!

## How It Works

1. **Paste Text**: Enter or paste text (10-4000 characters)
2. **Select Voice**: Choose from 6 AI voices (Alloy, Echo, Fable, Onyx, Nova, Shimmer)
3. **Generate**: Click "Generate Speech" button
4. **Wait**: AI processes your text (10-20 seconds)
5. **Download**: MP3 file downloads automatically

## API Endpoints

- `POST /api/generate-speech` - Convert text to speech
  - Body: `{ "text": "Your text here", "voice": "alloy" }`
  - Returns: MP3 audio file
- `GET /api/voices` - Get available voices and descriptions
- `GET /api/health` - Health check endpoint

## Tech Stack

- **Backend**: Node.js + Express
- **AI Service**: OpenAI Text-to-Speech API
- **Frontend**: Vanilla HTML/CSS/JavaScript
- **Voice Models**: 6 OpenAI TTS voices (Alloy, Echo, Fable, Onyx, Nova, Shimmer)

## Project Structure

```
├── server.js          # Main Express server
├── public/
│   └── index.html     # Frontend interface
├── package.json       # Dependencies
├── .env              # Environment variables
└── README.md         # This file
```

## Requirements

- Node.js 18+
- OpenAI API key
- Internet connection

## Error Handling

The app handles various error scenarios:
- Invalid text input (too short/long)
- OpenAI API rate limits
- Network connectivity issues
- Invalid API key configuration

## Available Voices

| Voice | Description | Gender | Accent |
|-------|-------------|--------|---------|
| **Alloy** | Neutral, balanced voice | Neutral | American |
| **Echo** | Warm and friendly | Male | American |
| **Fable** | Expressive storytelling | Neutral | British |
| **Onyx** | Deep and authoritative | Male | American |
| **Nova** | Bright and cheerful | Female | American |
| **Shimmer** | Soft and gentle | Female | American |

## Next Steps

Potential enhancements:
- ✅ ~~Multiple voice options~~ (Completed!)
- Audio preview player
- Batch text processing
- User accounts and history
- Deployment to Railway/Vercel

## License

ISC