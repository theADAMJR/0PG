import Command from './command.js';

export default new class extends Command {
  name = 'ping';

  async execute(msg) {
    await msg.reply('Pong!');
  }
}
