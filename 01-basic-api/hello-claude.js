import Anthropic from '@anthropic-ai/sdk';
import 'dotenv/config';

const client = new Anthropic();

const response = await client.messages.create({
  model: 'claude-sonnet-4-5',
  max_tokens: 1024,
  messages: [
    { role: 'user', content: 'Hello, Claude! Tell me one interesting fact about JavaScript.' }
  ]
});

console.log(response.content[0].text);
