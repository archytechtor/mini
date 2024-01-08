export default class ControlsHandler {
  CODES = [
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'KeyW',
    'KeyS',
    'KeyA',
    'KeyD',
    'Space',
    'ShiftLeft',
    'ShiftRight',
    'Enter',
    'NumpadEnter',
    'MouseClick',
    'KeyQ',
    'NumpadMultiply'
  ];

  constructor(game) {
    this.game = game;
    this.pressedKeys = {
      up: false,
      down: false,
      left: false,
      right: false,
      accelerate: false,
      attack: false,
      dash: false
    };
    this.isRightDirection = true;

    window.addEventListener('keydown', (event) => {
      this.setKeys(event, true);

      if (event.code === 'Backquote') {
        this.game.debugMode = !this.game.debugMode;
      }

      if (this.game.debugMode) {
        // console.log(event);
      }
    });

    window.addEventListener('keyup', (event) => {
      this.setKeys(event, false);
    });

    window.addEventListener('contextmenu', (event) => {
      event.preventDefault();
    });

    window.addEventListener('mousedown', (event) => {
      if (event.button === 0) {
        this.pressedKeys.attack = true;

        setTimeout(() => {
          this.pressedKeys.attack = false;
        }, 300);
      }
    });
  }

  get isIdle() {
    const {up, down, left, right, dash, attack} = this.pressedKeys;

    return !(up || down || left || right || dash || attack);
  }

  setKeys = (event, value) => {
    if (!this.CODES.includes(event.code)) {
      return;
    }

    switch (event.code) {
      case 'ArrowUp':
      case 'KeyW':
      case 'Space':
        this.pressedKeys.up = value;
        break;
      case 'ArrowDown':
      case 'KeyS':
        this.pressedKeys.down = value;
        break;
      case 'ArrowLeft':
      case 'KeyA':
        this.pressedKeys.left = value;
        this.isRightDirection = false;
        break;
      case 'ArrowRight':
      case 'KeyD':
        this.pressedKeys.right = value;
        this.isRightDirection = true;
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        this.pressedKeys.accelerate = value;
        break;
    }
  };
}