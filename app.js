const TelegramBot = require('node-telegram-bot-api');

const token = '1800761575:AAG5l3bRcvYzDVLHg6gS8P-aThQ9KdcxWG0';

const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/start/, msg => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
  
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Welcome to Lexi todo bot');
  });