import Anthropic from '@anthropic-ai/sdk';
import 'dotenv/config';

const client = new Anthropic();

// Define tools as JSON Schema — Claude decides when and how to call them
const tools = [
  {
    name: 'get_weather',
    description: 'Get current weather for a given city. Returns temperature and conditions.',
    input_schema: {
      type: 'object',
      properties: {
        city: { type: 'string', description: 'City name, e.g. "Tokyo"' },
        units: { type: 'string', enum: ['celsius', 'fahrenheit'], description: 'Temperature unit' }
      },
      required: ['city']
    }
  }
];

// Mock implementation — replace with a real weather API
function get_weather({ city, units = 'celsius' }) {
  const mockData = { Tokyo: 24, London: 15, 'New York': 21 };
  const temp = mockData[city] ?? 20;
  const display = units === 'fahrenheit' ? Math.round(temp * 9/5 + 32) + '°F' : temp + '°C';
  return JSON.stringify({ city, temperature: display, conditions: 'Partly cloudy' });
}

async function runWithTools(userMessage) {
  const messages = [{ role: 'user', content: userMessage }];

  // First turn: Claude may return a tool_use block
  let response = await client.messages.create({
    model: 'claude-sonnet-4-5',
    max_tokens: 1024,
    tools,
    messages
  });

  // Agentic loop: keep going while Claude wants to use tools
  while (response.stop_reason === 'tool_use') {
    const toolUseBlock = response.content.find(b => b.type === 'tool_use');
    const toolResult = get_weather(toolUseBlock.input);

    messages.push({ role: 'assistant', content: response.content });
    messages.push({
      role: 'user',
      content: [{
        type: 'tool_result',
        tool_use_id: toolUseBlock.id,
        content: toolResult
      }]
    });

    response = await client.messages.create({
      model: 'claude-sonnet-4-5',
      max_tokens: 1024,
      tools,
      messages
    });
  }

  console.log(response.content.find(b => b.type === 'text')?.text);
}

await runWithTools('What is the weather in Tokyo in Fahrenheit?');
