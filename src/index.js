import { StateMachine } from './StateMachine';
import { MainMenuState } from './MainMenuState';
import { OptionsMenuState } from './OptionsMenuState';

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

// Main menu switch
const optionsMenuButton = document.createElement('button');
optionsMenuButton.textContent = 'Options Menu';
optionsMenuButton.addEventListener('click', () => {
  console.log('Clicked options');
  gameStateMachine.add(new OptionsMenuState());
});

gameWin.appendChild(textBox);
gameWin.appendChild(mainMenuButton);
gameWin.appendChild(optionsMenuButton);
