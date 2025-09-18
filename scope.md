# Text-to-Speech Generator - Project Scope

## Overview
A simple web application that converts user-provided text into natural-sounding audio using OpenAI's Text-to-Speech API. Users can input text, select voice options, and download high-quality MP3 audio files.

## Core Features

### Backend (Node.js + Express)
- **Text-to-Speech API Integration**: Connect to OpenAI's TTS API to generate audio from text
- **Voice Selection**: Support multiple AI voice options (e.g., alloy, echo, fable, onyx, nova, shimmer)
- **Audio File Generation**: Convert text to MP3 format with configurable quality settings
- **File Download Endpoint**: Serve generated MP3 files for download
- **Input Validation**: Validate text input length and format
- **Error Handling**: Handle API errors, rate limits, and invalid requests
- **CORS Configuration**: Enable cross-origin requests from frontend

### Frontend (React)
- **Text Input Interface**: Large text area for users to paste or type content
- **Voice Selection Dropdown**: UI to choose from available AI voices
- **Generate Button**: Trigger text-to-speech conversion
- **Loading States**: Show progress during audio generation
- **Audio Preview**: Basic audio player to preview generated speech
- **Download Button**: Download MP3 file to user's device
- **Error Display**: Show user-friendly error messages
- **Responsive Design**: Mobile-friendly layout

## Technical Requirements

### API Integration
- OpenAI TTS API integration with proper authentication
- Support for text input up to API limits (4096 characters)
- Audio format: MP3 with high quality settings
- Voice models: All available OpenAI TTS voices

### File Handling
- Temporary file storage for generated audio
- Automatic cleanup of temporary files
- Streaming file downloads
- No persistent database storage required

### User Experience
- Simple, intuitive interface
- Fast audio generation (within API response times)
- Clear feedback for all user actions
- Graceful error handling and recovery

## Deployment
- **Platform**: Railway
- **Environment Variables**: Secure storage of OpenAI API keys
- **Static File Serving**: Frontend build files served by Express
- **Production Configuration**: Optimized for Railway deployment

## Constraints
- No user authentication or accounts
- No database or persistent storage
- No audio editing or post-processing features
- Text length limited by OpenAI API constraints
- Temporary file storage only (files cleaned up after download)

## Success Criteria
- Users can successfully convert text to speech
- All available OpenAI voices are selectable
- Generated MP3 files download correctly
- Application handles errors gracefully
- Responsive design works on mobile and desktop
- Successfully deploys and runs on Railway