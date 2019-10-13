import { EmptyState } from './EmptyState.js';

test('Empty state has all essential functions', () => {
  let state = new EmptyState();
  expect(typeof state.update).toBe('function');
  expect(typeof state.render).toBe('function');
  expect(typeof state.onEnter).toBe('function');
  expect(typeof state.onExit).toBe('function');
});

test('All empty state functions return undefined', () => {
  let state = new EmptyState();
  expect(state.update()).toBe(undefined);
  expect(state.render()).toBe(undefined);
  expect(state.onEnter()).toBe(undefined);
  expect(state.onExit()).toBe(undefined);
});
