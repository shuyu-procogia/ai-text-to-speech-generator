# Text-to-Speech Generator - UI Design

## Main Layout (Desktop/Mobile Responsive)

```
┌─────────────────────────────────────────────────────────────────┐
│                    🎙️ AI Text-to-Speech Generator                │
│                                                                 │
│  Transform your text into natural-sounding AI voice            │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  📝 Enter your text below:                                      │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │                                                             │ │
│  │  Type or paste your text here...                           │ │
│  │                                                             │ │
│  │  Example: "Welcome to our AI-powered text-to-speech        │ │
│  │  generator. This tool converts your written text into      │ │
│  │  natural-sounding audio using advanced AI technology."     │ │
│  │                                                             │ │
│  │                                                             │ │
│  │                                                             │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│  📊 Characters: 0 / 4000                                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  🎤 Voice: Alloy (Natural & Clear)                             │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │           🎵 Generate Speech                                │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  💡 Tips:                                                       │
│  • Keep text between 10-4000 characters for best quality       │
│  • Use punctuation for natural pauses                          │
│  • Generation typically takes 10-20 seconds                    │
└─────────────────────────────────────────────────────────────────┘
```

## Loading State

```
┌─────────────────────────────────────────────────────────────────┐
│                    🎙️ AI Text-to-Speech Generator                │
│                                                                 │
│  Transform your text into natural-sounding AI voice            │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ⏳ Generating your audio...                                    │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │  ████████████████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 65%              │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│  🤖 AI is processing your text...                              │
│  This usually takes 10-20 seconds                              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Success State

```
┌─────────────────────────────────────────────────────────────────┐
│                    🎙️ AI Text-to-Speech Generator                │
│                                                                 │
│  Transform your text into natural-sounding AI voice            │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ✅ Audio generated successfully!                               │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │               🎧 Play Audio Preview                         │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │               📥 Download MP3                               │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│  🎵 File: speech_output.mp3 • Size: 1.2MB • Duration: 0:45     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │               🔄 Generate Another                           │ │
│  └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

## Mobile Layout (Stacked)

```
┌─────────────────────────────┐
│   🎙️ AI Text-to-Speech      │
│                             │
│ Transform text into voice   │
└─────────────────────────────┘

┌─────────────────────────────┐
│ 📝 Enter text:              │
│                             │
│ ┌─────────────────────────┐ │
│ │                         │ │
│ │ Type or paste text...   │ │
│ │                         │ │
│ │                         │ │
│ │                         │ │
│ │                         │ │
│ └─────────────────────────┘ │
│                             │
│ 📊 0 / 4000 characters      │
└─────────────────────────────┘

┌─────────────────────────────┐
│ 🎤 Voice: Alloy             │
│                             │
│ ┌─────────────────────────┐ │
│ │   🎵 Generate Speech    │ │
│ └─────────────────────────┘ │
└─────────────────────────────┘
```

## Color Scheme & Styling Notes

```
Primary Colors:
├── Background: #f8fafc (light gray)
├── Cards: #ffffff (white)
├── Accent: #3b82f6 (blue)
├── Success: #10b981 (green)
├── Text: #1f2937 (dark gray)
└── Border: #e5e7eb (light gray)

Typography:
├── Heading: 24px, bold
├── Body: 16px, regular
├── Small: 14px, regular
└── Font: Inter, system fonts

Spacing:
├── Container: max-width 800px, centered
├── Padding: 24px
├── Gap: 16px between elements
└── Border-radius: 8px
```

## Component Breakdown

1. **Header**: Title + subtitle, centered
2. **Text Input Card**: Large textarea with character counter
3. **Voice Selection**: Simple display (no dropdown in MVP)
4. **Generate Button**: Primary action, full-width
5. **Status Section**: Loading, success, or error states
6. **Tips Section**: Helpful guidance for users
7. **Footer**: Optional branding or links

## Responsive Behavior

- **Desktop**: Side-by-side layout, generous spacing
- **Tablet**: Stacked layout, medium spacing
- **Mobile**: Full-width components, compact spacing
- **All sizes**: Touch-friendly buttons (min 44px height)