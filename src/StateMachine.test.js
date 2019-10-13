import { StateMachine } from './StateMachine';

let sm = new StateMachine();

class MockState {
  constructor() {}
  update() {
    return 'update';
  }
  render() {
    return 'render';
  }
  onEnter() {
    return 'onEnter';
  }
  onExit() {
    return 'onExit';
  }
}

class MockState2 {
  constructor() {}
  update() {
    return 'update2';
  }
  render() {
    return 'render2';
  }
  onEnter() {
    return 'onEnter2';
  }
  onExit() {
    return 'onExit2';
  }
}

let mockState = new MockState();
let mockState2 = new MockState2();

test('StateMachine defaults are correct', () => {
  //expect(sm.states.constructor.name).toBe('StateStack');
  expect(sm.currentState.constructor.name).toBe('EmptyState');
  expect(sm.update()).toBe(undefined);
  expect(sm.render()).toBe(undefined);
});

test('StateMachine adds state', () => {
  sm.add(mockState);
  expect(sm.currentState.constructor.name).toBe('MockState');
  expect(sm.states[0]).toBe(mockState);
  sm.add(mockState2);
  expect(sm.currentState.constructor.name).toBe('MockState2');
  expect(sm.states[1]).toBe(mockState2);
});

test('StateMachine updates correctly', () => {
  let spy = jest.spyOn(mockState2, 'update');
  sm.update();
  expect(spy).toHaveBeenCalled();
});

test('StateMachine renders correctly', () => {
  let spy = jest.spyOn(mockState2, 'render');
  sm.render();
  expect(spy).toHaveBeenCalled();
});

test('StateMachine changes correctly', () => {
  let spy = jest.spyOn(mockState2, 'onExit');
  let spy2 = jest.spyOn(mockState, 'onEnter');
  sm.change();
  expect(spy).toHaveBeenCalled();
  expect(spy2).toHaveBeenCalled();
  expect(sm.currentState.constructor.name).toBe('MockState');
});
