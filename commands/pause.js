import Command from './command.js';
import { MusicHandler } from '../handlers/music-handler.js';

export default new class extends Command {
  name = 'pause';

  async execute(msg) {
    const player = MusicHandler.get(msg);
    if (player.isPaused)
      throw new TypeError('Player is already paused.');
    await player.pause();

    await msg.channel.send(`> Paused.`);
  }
}
