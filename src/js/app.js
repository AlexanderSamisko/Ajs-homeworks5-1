import Character from './character';
import Bowerman from './bowerman';
import Swordsman from './swordsman';
import Magician from './magician';
import Undead from './undead';
import Daemon from './daemon';
import Zombie from './zombie';

const warrior = new Character('Warrior', 'Swordsman', 100, 1, 40, 10);
console.log(warrior);

const robinHood = new Bowerman('RobinHood');
console.log(robinHood);

const kingArthur = new Swordsman('KingArthur');
console.log(kingArthur);

const merlin = new Magician('Merlin');
console.log(merlin);

const ghoul = new Undead('Ghoul');
console.log(ghoul);

const abbadon = new Daemon('Abbadon');
console.log(abbadon);

const brainEater = new Zombie('Mindless');
console.log(brainEater);
