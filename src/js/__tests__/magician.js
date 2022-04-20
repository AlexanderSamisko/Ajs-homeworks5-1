import Magician from '../magician';


test('testing whether Magician with params could be created', () => {
  const Gendalf = new Magician('Gendalf');
  expect(Gendalf).toEqual({
    name: 'Gendalf',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
