import Command from './command.js';
import { MusicHandler } from '../handlers/music-handler.js';

export default new class extends Command {
  name = 'resume';

  async execute(msg) {
    const player = MusicHandler.get(msg);
    if (!player.isPaused)
      throw new TypeError('Player is already resumed.');
    await player.resume();

    await msg.channel.send(`> Resumed.`);
  }
}
