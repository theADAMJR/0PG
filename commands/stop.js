import Command from './command.js';
import { MusicHandler } from '../handlers/music-handler.js';

export default new class extends Command {
  name = 'stop';

  async execute(msg) {
    const player = MusicHandler.get(msg);
    await player.leave();

    await msg.channel.send(`> Player was stopped, and left channel.`);
  }
}
