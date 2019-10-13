export class MainMenuState {
  constructor() {}

  update() {}
  render() {}
  onEnter() {
    console.log('Entered Main Menu');
    let textBox = document.getElementById('textBox');
    textBox.style.backgroundColor = 'red';
  }
  onExit() {}
}
