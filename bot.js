import { Client } from 'discord.js';
import config from './config.json';
import { CommandHandler } from './handlers/command-handler.js';

const bot = new Client();
const commandHandler = new CommandHandler();

commandHandler.init();

bot.on('ready', () => console.log('Bot is ready!'));
bot.on('message', async (msg) => {
  if (msg.author.bot) return;

  await commandHandler.handle(msg);
});

bot.login(config.token);
