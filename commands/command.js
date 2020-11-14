export default class Command {
  name = '';

  execute(msg, ...args) {
    throw new TypeError('Command not implemented.');
  }
}
