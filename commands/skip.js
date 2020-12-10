import Command from './command.js';
import { MusicHandler } from '../handlers/music-handler.js';

export default new class extends Command {
  name = 'skip';

  async execute(msg) {
    const player = MusicHandler.get(msg);

    const oldTrack = player.q.peek();
    await player.skip();

    await msg.channel.send(`> Skipped \`${oldTrack.title}\`.`);
  }
}
