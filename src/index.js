import { StateMachine } from './StateMachine';
import { MainMenuState } from './MainMenuState';

const gameStateMachine = new StateMachine();
const gameWin = document.body;

// Div to display colors
const textBox = document.createElement('div');
textBox.id = 'textBox';
textBox.style.backgroundColor = 'blue';

// Main menu switch
const mainMenuButton = document.createElement('button');
mainMenuButton.textContent = 'Main Menu';
mainMenuButton.addEventListener('click', () => {
  gameStateMachine.add(new MainMenuState());
});

gameWin.appendChild(textBox);
gameWin.appendChild(mainMenuButton);
