import Character from './character';

export default class Undead extends Character {
  constructor(name, type = 'Undead') {
    super(name, type);
    this.level = 1;
    this.health = 100;
    this.attack = 25;
    this.defence = 25;
  }
}
