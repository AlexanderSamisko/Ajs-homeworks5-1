import Character from './character';

export default class Daemon extends Character {
  constructor(name, type = 'Daemon') {
    super(name, type);
    this.level = 1;
    this.health = 100;
    this.attack = 10;
    this.defence = 40;
  }
}
