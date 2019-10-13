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
    this.currentState.onExit();
    this.states.pop();
    this.currentState = this.states[this.states.length - 1];
    this.currentState.onEnter();
  }

  add(state) {
    this.currentState = state;
    this.states.push(state);
  }
}
