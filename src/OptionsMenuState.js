export class OptionsMenuState {
  constructor() {}

  update() {}
  render() {}
  onEnter() {
    console.log('Entered Options Menu');
    let textBox = document.getElementById('textBox');
    textBox.style.backgroundColor = 'green';
  }
  onExit() {}
}
