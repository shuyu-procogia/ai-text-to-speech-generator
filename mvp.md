# Text-to-Speech Generator MVP

## MVP Goal
**User pastes text → gets beautiful AI audio in under 30 seconds**

## Core MVP Features (Backend-Focused)

### 1. Single API Endpoint
```
POST /api/generate-speech
```
- Accepts: `{ text: string }`
- Returns: Direct MP3 file stream
- One endpoint does everything: validate → generate → serve

### 2. OpenAI Integration
- Use OpenAI's `tts-1` model (fastest)
- Fixed voice: `alloy` (most natural-sounding)
- Direct streaming response (no file storage)
- Built-in error handling for API failures

### 3. Minimal Frontend
- Single HTML page with embedded CSS/JS
- Large textarea for text input
- One "Generate Audio" button
- Automatic download trigger on success
- Loading spinner during generation

### 4. Smart Backend Features
- **Input validation**: 10-4000 characters (sweet spot for quality)
- **Auto-cleanup**: Text preprocessing (trim whitespace, basic formatting)
- **Fast response**: Stream audio directly to browser
- **Error boundaries**: Graceful fallbacks for API issues

## Technical Implementation

### Backend Stack
- **Node.js + Express** (minimal setup)
- **OpenAI SDK** for TTS integration
- **Multer** for handling text input
- **CORS** enabled for local development

### File Structure
```
/
├── server.js          # Main Express server
├── public/
│   └── index.html    # Single-page frontend
├── package.json      # Dependencies
└── .env             # OpenAI API key
```

### Key Dependencies
```json
{
  "express": "^4.18.0",
  "openai": "^4.20.0",
  "cors": "^2.8.5",
  "dotenv": "^16.0.0"
}
```

## User Flow (30-Second Experience)
1. **Paste text** (0-5 seconds)
2. **Click generate** (1 second)
3. **Loading spinner** (5-15 seconds - OpenAI processing)
4. **Auto-download MP3** (1-5 seconds)
5. **Play beautiful audio** (instant magic ✨)

## MVP Constraints (Keep It Simple)
- ❌ No voice selection (fixed to `alloy`)
- ❌ No user accounts or history
- ❌ No file storage or database
- ❌ No audio preview in browser
- ❌ No custom styling (basic HTML/CSS)
- ❌ No deployment config (local development first)

## Success Metrics
- [ ] Text input → MP3 download works reliably
- [ ] Total time under 30 seconds
- [ ] Audio quality sounds professional
- [ ] Zero-config setup for development
- [ ] Handles errors gracefully (show friendly messages)

## Post-MVP Enhancements
1. Voice selection dropdown
2. Audio preview player
3. Better UI/UX with React
4. Railway deployment
5. Input length indicators
6. Audio quality options

## Why This MVP Works
- **Instant gratification**: Direct download feels magical
- **Backend focus**: Showcases API integration skills
- **Learning friendly**: Simple enough to understand every line
- **Extensible**: Easy to add features later
- **Production-ready core**: OpenAI integration is the hardest part