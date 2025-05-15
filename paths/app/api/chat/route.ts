import { OpenAI } from 'openai';
import { StreamingTextResponse, OpenAIStream } from 'ai';

// Ensure API keys are present
if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing OPENAI_API_KEY environment variable');
}

if (!process.env.ANTHROPIC_API_KEY) {
  throw new Error('Missing ANTHROPIC_API_KEY environment variable');
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Simple function to create Anthropic headers
const createAnthropicHeaders = (apiKey: string) => ({
  'Content-Type': 'application/json',
  'x-api-key': apiKey,
  'anthropic-version': '2023-06-01',
});

export async function POST(req: Request) {
  try {
    const { messages, model } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response('Messages must be an array', { status: 400 });
    }

    if (!model || typeof model !== 'string') {
      return new Response('Model must be specified', { status: 400 });
    }

    if (model === 'gpt-4') {
      const response = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: messages.map(msg => ({
          role: msg.role,
          content: msg.content
        })),
        temperature: 0.7,
        stream: true,
      });

      const stream = OpenAIStream(response);
      return new StreamingTextResponse(stream);
    } else if (model === 'claude-3-sonnet') {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: createAnthropicHeaders(process.env.ANTHROPIC_API_KEY!),
        body: JSON.stringify({
          model: 'claude-3-sonnet-20240229',
          messages: messages.map(msg => ({
            role: msg.role,
            content: msg.content,
          })),
          temperature: 0.7,
          stream: true,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Error from Anthropic API');
      }

      // Convert the response to a ReadableStream
      return new Response(response.body, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
        },
      });
    } else {
      return new Response('Invalid model specified', { status: 400 });
    }
  } catch (error: any) {
    console.error('Error in chat API:', error);
    return new Response(
      error.message || 'An error occurred processing your request',
      { status: error.status || 500 }
    );
  }
} 