import Character from "./character";

export default class Bowerman extends Character {
    constructor(name,type){
        super(name, type = 'Bowerman');
        this.level = 1;
        this.health = 100;
        this.attack = 25;
        this.defence = 25;
    }
};
