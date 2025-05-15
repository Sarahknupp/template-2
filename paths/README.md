# AI Chat Application

A modern chat application that supports both OpenAI's GPT-4 and Anthropic's Claude 3 Sonnet models, built with Next.js, React, and Tailwind CSS.

## Features

- Real-time chat interface with streaming responses
- Support for both GPT-4 and Claude 3 Sonnet models
- Model switching with persistent selection
- Markdown rendering for formatted responses
- Chat history persistence
- Error handling and loading states
- Mobile-responsive design

## Prerequisites

- Node.js 18.x or later
- OpenAI API key
- Anthropic API key

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-chat-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory with your API keys:
```
OPENAI_API_KEY=your_openai_api_key
ANTHROPIC_API_KEY=your_anthropic_api_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

- `OPENAI_API_KEY`: Your OpenAI API key
- `ANTHROPIC_API_KEY`: Your Anthropic API key

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- Vercel AI SDK
- OpenAI API
- Anthropic API

## Development

The application is structured as follows:

- `/app`: Next.js app router pages and API routes
- `/components`: React components
- `/types`: TypeScript type definitions
- `/public`: Static assets

## License

MIT 