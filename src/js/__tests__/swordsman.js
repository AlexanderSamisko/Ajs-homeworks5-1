import Swordsman from '../swordsman';


test('testing whether Swordsman with params could be created', () => {
    const Lancelot = new Swordsman('Lancelot');
    expect(Lancelot).toEqual({
        name: 'Lancelot',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    })
}) 