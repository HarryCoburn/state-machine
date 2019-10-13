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

  change(state) {
    for (let i = this.states.length - 1; i >= 0; i--) {
      if (this.states[i].constructor.name !== state.constructor.name) {
        this.states[i].onExit();
        this.states.pop();
      } else {
        this.currentState = this.states[i];
        this.currentState.onEnter();
        break;
      }
    }
  }

  add(state) {
    if (state.constructor.name === this.currentState.constructor.name) {
      console.log('Tried to change to current state to stack');
      return;
    }
    let stateExists = this.states.find(stackItem => {
      return stackItem.constructor.name === state.constructor.name;
    });

    if (stateExists === undefined) {
      this.states.push(state);
      this.currentState = this.states[this.states.length - 1];
      this.currentState.onEnter();
    } else {
      this.change(state);
    }
  }

  end() {
    this.currentState.onExit();
    this.states.pop();
    this.currentState = this.states[this.states.length - 1];
    this.currentState.onEnter();
  }
}
