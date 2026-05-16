import Anthropic from '@anthropic-ai/sdk';
import 'dotenv/config';
import * as readline from 'readline';

const client = new Anthropic();
const history = [];

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

async function chat(userMessage) {
  history.push({ role: 'user', content: userMessage });

  const response = await client.messages.create({
    model: 'claude-sonnet-4-5',
    max_tokens: 1024,
    system: 'You are a helpful coding assistant. Keep answers concise.',
    messages: history
  });

  const assistantMessage = response.content[0].text;
  history.push({ role: 'assistant', content: assistantMessage });

  console.log(`\nClaude: ${assistantMessage}\n`);
}

function prompt() {
  rl.question('You: ', async (input) => {
    if (input.toLowerCase() === 'exit') return rl.close();
    await chat(input);
    prompt();
  });
}

console.log('Multi-turn chat with Claude (type "exit" to quit)\n');
prompt();
