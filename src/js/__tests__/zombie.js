import Zombie from '../zombie';


test('testing whether Zombie with params could be created', () => {
  const Seon = new Zombie('Seon');
  expect(Seon).toEqual({
    name: 'Seon',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
