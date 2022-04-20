import Character from './character';

export default class Zombie extends Character {
  constructor(name, type = 'Zombie') {
    super(name, type);
    this.level = 1;
    this.health = 100;
    this.attack = 40;
    this.defence = 10;
  }
}
