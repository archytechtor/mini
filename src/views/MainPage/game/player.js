import Sprite from './sprite';

export default class Player extends Sprite {
  constructor(game, {position, src, frameRate, scale = 0.5, animations}) {
    super(game, {position, src, frameRate, scale});

    this.game = game;
    this.position = position;
    this.velocity = {x: 0, y: 1};
    this.isOnGround = true;
    this.animations = animations;
    this.lastAttack = 1;

    this.hitbox = {
      position: {
        x: this.position.x,
        y: this.position.y
      },
      width: 14,
      height: 27
    };

    this.camerabox = {
      position: {
        x: this.position.x - 100 + this.width * 0.5,
        y: this.position.y - 50 + this.height * 0.5
      },
      width: 200,
      height: 100
    };

    this.initAnimations();
  }

  update = () => {
    this.checkCanvasCollision();
    this.updateFrames();
    this.updateCameraBox();

    this.debugging();

    this.draw();
    this.movement();
    this.updateCamera();
    this.calculateAnimation();

    this.updateHitBox();
    this.checkCollisions('horizontal');

    this.applyGravity();

    this.updateHitBox();
    this.checkCollisions('vertical');
  };

  debugging = () => {
    if (this.game.debugMode) {
      // camerabox
      this.game.context.fillStyle = 'rgba(0, 0, 255, 0.2)';
      this.game.context.fillRect(
        this.camerabox.position.x,
        this.camerabox.position.y,
        this.camerabox.width,
        this.camerabox.height
      );

      // frame
      this.game.context.fillStyle = 'rgba(0, 255, 0, 0.2)';
      this.game.context.fillRect(
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );

      // hitbox
      this.game.context.fillStyle = 'rgba(255, 0, 0, 0.2)';
      this.game.context.fillRect(
        this.hitbox.position.x,
        this.hitbox.position.y,
        this.hitbox.width,
        this.hitbox.height
      );
    }
  };

  initAnimations = () => {
    for (const key in this.animations) {
      const image = new Image();

      image.src = this.animations[key].src;

      this.animations[key].image = image;
    }
  };

  movement = () => {
    const {pressedKeys} = this.game.controls;

    this.velocity.x = 0;

    if (this.isOnGround && pressedKeys.up) {
      this.velocity.y = -5;
      this.isOnGround = false;
    }

    if (pressedKeys.right) {
      this.velocity.x = pressedKeys.accelerate ? 6 : 3;
    }

    if (pressedKeys.left) {
      this.velocity.x = pressedKeys.accelerate ? -6 : -3;
    }

    if (pressedKeys.right && pressedKeys.left) {
      this.switchAction('idle');

      this.velocity.x = 0;
    }

    if (pressedKeys.attack) {
      //
    }

    this.checkCanvasCollision();

    this.position.x += this.velocity.x;
  };

  applyGravity = () => {
    this.velocity.y += this.game.GRAVITY;
    this.position.y += this.velocity.y;
  };

  checkCollisions = (direction) => {
    const axis = direction === 'horizontal' ? 'x' : 'y';
    const size = direction === 'horizontal' ? 'width' : 'height';
    const margin = 0.01;

    for (const collisionBlock of this.game.collisionFloorBlocks) {
      if (this.game.collision(this.hitbox, collisionBlock, 'floor')) {
        if (this.velocity[axis] > 0) {
          this.velocity[axis] = 0;

          const offset = this.hitbox.position[axis] - this.position[axis] + this.hitbox[size];

          this.position[axis] = collisionBlock.position[axis] - margin - offset;

          if (direction === 'vertical') {
            this.isOnGround = true;
          }

          break;
        }

        if (this.velocity[axis] < 0) {
          this.velocity[axis] = 0;

          const offset = this.hitbox.position[axis] - this.position[axis];

          this.position[axis] = collisionBlock.position[axis] +
            collisionBlock[size] + margin - offset;

          break;
        }
      }
    }

    for (const collisionBlock of this.game.collisionPlatformBlocks) {
      if (this.game.collision(this.hitbox, collisionBlock, 'platform')) {
        if (this.velocity.y > 0) {
          this.velocity.y = 0;

          const offset = this.hitbox.position.y - this.position.y + this.hitbox.height;

          this.position.y = collisionBlock.position.y - margin - offset;

          if (direction === 'vertical') {
            this.isOnGround = true;
          }

          break;
        }
      }
    }
  };

  checkCanvasCollision = () => {
    const isRightEdge = this.hitbox.position.x + this.hitbox.width + this.velocity.x >=
      this.game.background.image.width;
    const isLeftEdge = this.hitbox.position.x + this.velocity.x <= 0;

    if (isRightEdge || isLeftEdge) {
      this.velocity.x = 0;
    }
  };

  updateHitBox = () => {
    const {isRightDirection} = this.game.controls;

    const marginX = isRightDirection ? 34 : 32;
    const marginY = isRightDirection ? 26 : 26;

    this.hitbox = {
      position: {
        x: this.position.x + marginX,
        y: this.position.y + marginY
      },
      width: 14,
      height: 27
    };
  };

  updateCameraBox = () => {
    this.camerabox = {
      position: {
        x: this.position.x - 100 + this.width * 0.5,
        y: this.position.y - 50 + this.height * 0.5
      },
      width: 200,
      height: 100
    };
  };

  switchAction = (action) => {
    const animation = this.animations[action] || this.animations.idle;

    if (this.image === animation.image) {
      return;
    }

    this.image = animation.image;
    this.frameRate = animation.frameRate;
    this.frameBuffer = animation.frameBuffer;
  };

  calculateAnimation = () => {
    const {pressedKeys, isIdle, isRightDirection} = this.game.controls;

    if (pressedKeys.attack) {
      // if (this.lastAttack === 3) {
      //   this.lastAttack = 0;
      // } else {
      //   this.lastAttack++;
      // }

      return this.switchAction(`attack${this.lastAttack}`);
    }

    if (this.isOnGround) {
      if (isIdle || pressedKeys.right && pressedKeys.left) {
        return isRightDirection ?
          this.switchAction('idle') :
          this.switchAction('idleLeft');
      }
    }

    if (this.velocity.y < 0) {
      return isRightDirection ?
        this.switchAction('jump') :
        this.switchAction('jumpLeft');
    }

    if (!this.isOnGround && this.velocity.y >= 0) {
      return isRightDirection ?
        this.switchAction('fall') :
        this.switchAction('fallLeft');
    }

    if (pressedKeys.right) {
      return this.switchAction('run');
    }

    if (pressedKeys.left) {
      return this.switchAction('runLeft');
    }
  };

  updateCamera = () => {
    if (this.velocity.x > 0) {
      this.moveCameraRight();
    } else if (this.velocity.x < 0) {
      this.moveCameraLeft();
    }

    if (this.velocity.y < 0) {
      this.moveCameraDown();
    } else if (this.velocity.y > 0) {
      this.moveCameraUp();
    }
  };

  moveCameraDown = () => {
    if (this.camerabox.position.y + this.velocity.y <= 0) {
      return;
    }

    if (this.camerabox.position.y <= Math.abs(this.game.camera.position.y)) {
      this.game.camera.position.y -= this.velocity.y;
    }
  };

  moveCameraUp = () => {
    if (
      this.camerabox.position.y + this.camerabox.height + this.velocity.y >=
      this.game.background.image.height
    ) {
      return;
    }

    if (
      this.camerabox.position.y + this.camerabox.height >=
      Math.abs(this.game.camera.position.y) + this.game.SCALED_HEIGHT
    ) {
      this.game.camera.position.y -= this.velocity.y;
    }
  };

  moveCameraLeft = () => {
    if (this.camerabox.position.x <= 0) {
      return;
    }

    if (this.camerabox.position.x <= Math.abs(this.game.camera.position.x)) {
      this.game.camera.position.x -= this.velocity.x;
    }
  };

  moveCameraRight = () => {
    const cameraBoxRightSide = this.camerabox.position.x + this.camerabox.width;

    if (cameraBoxRightSide >= this.game.background.image.width) {
      return;
    }

    if (cameraBoxRightSide >= this.game.SCALED_WIDTH + Math.abs(this.game.camera.position.x)) {
      this.game.camera.position.x -= this.velocity.x;
    }
  };
}