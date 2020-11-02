const { Client } = require('discord.js');
const { play, stop } = require('./commands');

const bot = new Client();

bot.login('<yourBotToken>');

bot.on('message', (msg) => {
  if (msg.author.bot) return;

  const prefix = '.';
  if (!msg.content.startsWith(prefix)) return;

  const commandName = getCommandName(prefix, msg.content);
  const args = getCommandArgs(prefix, msg.content);

  if (commandName === 'play')
    return play(msg, args);
  if (commandName === 'stop')
    return stop(msg);
});

function getCommandName(prefix, content) {
  return content
    .slice(prefix.length)
    .split(' ')[0];
}
function getCommandArgs(prefix, content) {
  return content
    .slice(prefix.length)
    .split(' ')
    .slice(1);    
}