import { MainMenuState } from './MainMenuState.js';

test('Empty state has all essential functions', () => {
  let state = new MainMenuState();
  expect(typeof state.update).toBe('function');
  expect(typeof state.render).toBe('function');
  expect(typeof state.onEnter).toBe('function');
  expect(typeof state.onExit).toBe('function');
});
