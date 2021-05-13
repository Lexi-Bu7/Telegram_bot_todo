const TelegramBot = require('node-telegram-bot-api');

//import mongoose module
const mongoose = require('mongoose');


const token = '1800761575:AAG5l3bRcvYzDVLHg6gS8P-aThQ9KdcxWG0';

const db = require('./config/keys.js');

// telegram bot
const bot = new TelegramBot(token, {polling: true});

mongoose
  .connect(db)
  .then(() => console.log("Mongodb connected"))
  .catch(err => console.log("catched MongoDB connection error:"+ err));


// Matches "/echo [whatever]"
bot.onText(/\/start/, msg => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Welcome to Lexi\'s todo bot');
  });

  bot.onText(/\/todo/, msg => {

        let todo = msg.text.split(' ').slice(1).join('');
        // no input
        if(!todo){
            return bot.sendMessage(chatId,"Please add todo item")
        }
  });