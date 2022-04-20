import Undead from '../undead';


test('testing whether Undead with params could be created', () => {
  const Lich = new Undead('Lich');
  expect(Lich).toEqual({
    name: 'Lich',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
