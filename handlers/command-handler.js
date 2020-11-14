import { readdirSync } from 'fs';
import { resolve } from 'path';

export class CommandHandler {
  commands = new Map();

  async init() {
    const commandsPath = resolve('./commands');
    const files = readdirSync(commandsPath);

    for (const file of files) {
      const { default: command } = await import(`../commands/${file}`);
      if (!command?.name) continue;

      this.commands.set(command.name, command);
    }
    console.log(`Loaded ${this.commands.size} commands`);
  }

  async handle(msg) {
    try {
      const prefix = '.';
      const args = msg.content
        .split(' ')
        .slice(1);

      const commandName = msg.content
        .split(' ')[0]
        .slice(prefix.length);

      const command = this.commands.get(commandName);
      await command?.execute(msg, ...args); 
    } catch (error) {
      await msg.channel.send(`⚠ ${error?.message}`);
    }
  }
}
