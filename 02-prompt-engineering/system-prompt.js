import Anthropic from '@anthropic-ai/sdk';
import 'dotenv/config';

const client = new Anthropic();

// System prompts shape Claude's persona, tone, and task scope
const response = await client.messages.create({
  model: 'claude-sonnet-4-5',
  max_tokens: 1024,
  system: `You are a senior TypeScript engineer reviewing code for a production SaaS application.
Focus on: type safety, performance, and maintainability.
Always suggest concrete improvements with code examples.
Respond in a concise, professional tone.`,
  messages: [
    {
      role: 'user',
      content: `Review this function:\n\nfunction getUser(id) {\n  return db.find(id);\n}`
    }
  ]
});

console.log(response.content[0].text);
