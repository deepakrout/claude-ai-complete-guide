import Anthropic from '@anthropic-ai/sdk';
import 'dotenv/config';

const client = new Anthropic();

// Streaming: tokens arrive as they're generated, not all at once
console.log('Claude (streaming):\n');

const stream = await client.messages.stream({
  model: 'claude-sonnet-4-5',
  max_tokens: 512,
  messages: [
    { role: 'user', content: 'Write a short haiku about TypeScript generics.' }
  ]
});

for await (const chunk of stream) {
  if (chunk.type === 'content_block_delta' && chunk.delta.type === 'text_delta') {
    process.stdout.write(chunk.delta.text);
  }
}

console.log('\n');
