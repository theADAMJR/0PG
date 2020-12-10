import Command from './command.js';
import { MusicHandler } from '../handlers/music-handler.js';

export default new class extends Command {
  name = 'seek';

  async execute(msg, to) {
    to = +to;

    const player = MusicHandler.get(msg);
    const seconds = Math.round(player.position / 1000);
    if (!to)
      return msg.channel.send(`> Player is at position \`${seconds}s\`.`);

    await player.seek(to);

    await msg.channel.send(`> Seeked to \`${to}s\`.`);
  }
}
