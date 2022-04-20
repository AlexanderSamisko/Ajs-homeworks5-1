import Daemon from '../daemon';


test('testing whether Daemon with params could be created', () => {
  const Lilith = new Daemon('Lilith');
  expect(Lilith).toEqual({
    name: 'Lilith',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
