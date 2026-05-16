import Anthropic from '@anthropic-ai/sdk';
import 'dotenv/config';

const client = new Anthropic();

// Chain-of-thought: ask Claude to reason step-by-step before concluding
const response = await client.messages.create({
  model: 'claude-sonnet-4-5',
  max_tokens: 1024,
  messages: [
    {
      role: 'user',
      content: `Think step by step, then answer:

A SaaS app has 3,000 monthly active users. 5% upgrade to Pro at $29/mo.
10% of Pro users upgrade to Enterprise at $99/mo.
What is the monthly recurring revenue?

<thinking>Work through each tier carefully.</thinking>`
    }
  ]
});

console.log(response.content[0].text);
