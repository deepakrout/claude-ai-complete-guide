import Anthropic from '@anthropic-ai/sdk';
import 'dotenv/config';

const client = new Anthropic();

// Few-shot prompting: provide examples to guide output format
const response = await client.messages.create({
  model: 'claude-sonnet-4-5',
  max_tokens: 512,
  messages: [
    {
      role: 'user',
      content: 'Convert these to slug format: "Hello World"'
    },
    {
      role: 'assistant',
      content: 'hello-world'
    },
    {
      role: 'user',
      content: 'Convert: "Getting Started with Angular Signals"'
    },
    {
      role: 'assistant',
      content: 'getting-started-with-angular-signals'
    },
    {
      role: 'user',
      content: 'Convert: "Claude AI: The Complete Developer Guide"'
    }
  ]
});

console.log(response.content[0].text);
// Expected: claude-ai-the-complete-developer-guide
