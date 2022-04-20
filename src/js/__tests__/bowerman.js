import Bowerman from '../bowerman';


test('testing whether Bowerman with params could be created', () => {
    const RobinHood = new Bowerman('RobinHood');
    expect(RobinHood).toEqual({
        name: 'RobinHood',
        type: 'Bowerman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    })
}) 


