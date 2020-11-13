import { Client } from 'discord.js';
import config from './config.json';

const bot = new Client();

bot.on('ready', () => console.log('Bot is ready!'));
bot.on('message', async (msg) => {
  if (msg.author.bot) return;

  await msg.reply('Hi');
});

bot.login(config.token);