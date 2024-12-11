# Welcome message chatbot for Telegram

The chatbot greets every new member of the Telegram chat using their nickname. One minute later, the greeting is deleted automatically.

## Features

- Automatically detect new chat members
- Send personalized welcome messages using user's nickname
- Auto-delete greeting message after one minute

## Preview

![Screenshot](/images/Bot_screenshot.jpg)

## Prerequisites

- Node.js (v. 14+)
- npm (v. 6+)
- dotenv (v. 16+)
- node-telegram-bot-api (v. 0.66.0+)

## Installation

After cloning the repo, install the dependencies by:

```bash
npm install
```

Configure environment variables
Create a .env file in the project root and add:

```bash
API_KEY_BOT = "your_bot_token_here"
```

Then run with:

```bash
node index.js
```

Dev mode:

```bash
nodemon index.js
```

## Contacts

Liubov Osokina - [luv.subbota@gmail.com](mailto:luv.subbota@gmail.com)
Project Link: https://github.com/0s0ka/pikova-bot-stroika.git
