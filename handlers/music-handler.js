import { MusicClient } from '@2pg/music';

export class MusicHandler {
  static #client = new MusicClient();
  
  constructor() {
    this.#client.on('trackStart', (player, track) => player.textChannel
      ?.send(`> \`${track.title}\` - **${track.requestor}** started.`));
    this.#client.on('queueEnd', (player) => player.textChannel
      ?.send(`> Queue has ended.`));
  }

  static get(msg) {
    return this.#client.get(msg.guild.id)
      ?? this.#client.create(msg.guild.id, {
        textChannel: msg.channel,
        voiceChannel: msg.member.voice.channel
      });
  }
}
