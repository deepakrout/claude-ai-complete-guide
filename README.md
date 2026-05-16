# Claude AI: The Complete Developer Guide

Companion repository for the tutorial post **[Claude AI: The Complete Developer Guide — Features, Prompting Techniques & Real-World Workflows](https://habitualcs.io)**.

This repo contains working code examples for every major Claude capability covered in the article: prompt engineering, multi-turn conversations, tool use, document analysis, and API integration.

---

## 📁 Project Structure

```
claude-ai-complete-guide/
├── 01-basic-api/           # Hello Claude — simple completions
├── 02-prompt-engineering/  # System prompts, few-shot, chain-of-thought
├── 03-multi-turn/          # Conversation history management
├── 04-tool-use/            # Function/tool calling with Claude
├── 05-document-analysis/   # PDF & file analysis examples
├── 06-vision/              # Image understanding
├── 07-advanced-patterns/   # Agentic loops, streaming, batching
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- An [Anthropic API key](https://console.anthropic.com/)

### Installation

```bash
git clone https://github.com/deepakrout/claude-ai-complete-guide.git
cd claude-ai-complete-guide
npm install
```

### Configure your API key

```bash
cp .env.example .env
# Then edit .env and add your ANTHROPIC_API_KEY
```

### Run an example

```bash
node 01-basic-api/hello-claude.js
```

---

## 📖 Examples Overview

| Folder | What it covers |
|---|---|
| `01-basic-api` | SDK setup, simple text completions |
| `02-prompt-engineering` | System prompts, few-shot, chain-of-thought, XML tags |
| `03-multi-turn` | Building stateful conversations with history arrays |
| `04-tool-use` | Defining tools, handling tool_use blocks, agentic loops |
| `05-document-analysis` | Sending PDFs and extracting structured data |
| `06-vision` | Passing images, screenshot understanding |
| `07-advanced-patterns` | Streaming, prompt caching, batch API |

---

## 📝 Related Article

Read the full tutorial on [habitualcs.io](https://habitualcs.io) for step-by-step explanations of each example.

---

## 🪪 License

MIT
