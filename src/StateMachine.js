import { EmptyState } from './EmptyState.js';

export class StateMachine {
  constructor() {
    this.states = [];
    this.currentState = new EmptyState();
  }

  update() {
    this.currentState.update();
  }

  render() {
    this.currentState.render();
  }

  change() {
    if (this.states.length <= 1)
      throw 'Cannot change to new state until more states are added. Must have at least two states to change.';
    this.currentState.onExit();
    this.states.pop();
    this.currentState = this.states[this.states.length - 1];
    this.currentState.onEnter();
  }

  add(state) {
    if (this.states.length === 0) {
      this.currentState = state;
      this.states.push(state);
      this.currentState.onEnter();
    } else {
      this.states.push(state);
    }
  }
}
