import Player from './player';
import ControlsHandler from './controls';
import Sprite from './sprite';
import CollisionBlock from './collisionBlock';
import {floorCollisions, platformCollisions} from './collisions';
import background from '@styles/img/background.png';

import warriorIdle from '@styles/img/warrior/Idle.png';
import warriorIdleLeft from '@styles/img/warrior/IdleLeft.png';

import warriorRun from '@styles/img/warrior/Run.png';
import warriorRunLeft from '@styles/img/warrior/RunLeft.png';

import warriorJump from '@styles/img/warrior/Jump.png';
import warriorJumpLeft from '@styles/img/warrior/JumpLeft.png';

import warriorFall from '@styles/img/warrior/Fall.png';
import warriorFallLeft from '@styles/img/warrior/FallLeft.png';

import warriorAttack1 from '@styles/img/warrior/Attack1.png';
import warriorAttack2 from '@styles/img/warrior/Attack2.png';
import warriorAttack3 from '@styles/img/warrior/Attack3.png';

import warriorTakeHit from '@styles/img/warrior/Take Hit.png';
import warriorTakeHit2 from '@styles/img/warrior/Take Hit - white silhouette.png';

import warriorDeath from '@styles/img/warrior/Death.png';

class Game {
  GRAVITY = 0.2;
  GROUND_MARGIN = 0;
  WIDTH = 1024;
  HEIGHT = 576;
  SCALE = 4;
  SCALED_WIDTH = this.WIDTH / this.SCALE;
  SCALED_HEIGHT = this.HEIGHT / this.SCALE;
  FRAMES_PER_SECOND = 40;
  FRAME_MIN_TIME = 1000 / 60 * (60 / this.FRAMES_PER_SECOND) - 1000 / 60 * 0.5;

  debugMode = false;
  collisionFloorBlocks = [];
  collisionPlatformBlocks = [];
  lastFrameTime = 0;

  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');

    this.canvas.width = this.WIDTH;
    this.canvas.height = this.HEIGHT;

    this.calculateCollisionBlocks();

    this.background = new Sprite(
      this,
      {
        position: {x: 0, y: 0},
        src: background
      }
    );

    this.player = new Player(
      this,
      {
        position: {x: 100, y: 344},
        src: warriorIdle,
        frameRate: 8,
        animations: {
          idle: {
            src: warriorIdle,
            frameRate: 8,
            frameBuffer: 4
          },
          idleLeft: {
            src: warriorIdleLeft,
            frameRate: 8,
            frameBuffer: 4
          },
          run: {
            src: warriorRun,
            frameRate: 8,
            frameBuffer: 5
          },
          runLeft: {
            src: warriorRunLeft,
            frameRate: 8,
            frameBuffer: 5
          },
          jump: {
            src: warriorJump,
            frameRate: 2,
            frameBuffer: 5
          },
          jumpLeft: {
            src: warriorJumpLeft,
            frameRate: 2,
            frameBuffer: 5
          },
          fall: {
            src: warriorFall,
            frameRate: 2,
            frameBuffer: 5
          },
          fallLeft: {
            src: warriorFallLeft,
            frameRate: 2,
            frameBuffer: 5
          },
          attack1: {
            src: warriorAttack1,
            frameRate: 4,
            frameBuffer: 5
          },
          attack2: {
            src: warriorAttack2,
            frameRate: 4,
            frameBuffer: 5
          },
          attack3: {
            src: warriorAttack3,
            frameRate: 4,
            frameBuffer: 5
          }
        }
      }
    );

    this.controls = new ControlsHandler(this);

    this.camera = {
      position: {
        x: 0,
        y: -this.background.image.height + this.SCALED_HEIGHT
      }
    };
  }

  calculateCollisionBlocks = () => {
    floorCollisions.forEach((row, rowIndex) => {
      row.forEach((value, blockIndex) => {
        if (value) {
          const x = blockIndex * 16;
          const y = rowIndex * 16;

          this.collisionFloorBlocks.push(
            new CollisionBlock(
              this,
              {
                position: {x, y},
                width: 16,
                height: 16
              }
            )
          );
        }
      });
    });

    platformCollisions.forEach((row, rowIndex) => {
      row.forEach((value, blockIndex) => {
        if (value) {
          const x = blockIndex * 16;
          const y = rowIndex * 16;

          this.collisionPlatformBlocks.push(
            new CollisionBlock(
              this,
              {
                position: {x, y},
                width: 16,
                height: 4
              }
            )
          );
        }
      });
    });
  };

  collision = (object1, object2, type) => {
    const firstCollision = object1.position.x <= object2.position.x + object2.width;
    const secondCollision = object1.position.x + object1.width >= object2.position.x;
    const thirdCollision = type === 'floor' ?
      object1.position.y <= object2.position.y + object2.height :
      object1.position.y + object1.height <= object2.position.y + object2.height;
    const fourthCollision = object1.position.y + object1.height >= object2.position.y;

    return firstCollision && secondCollision && thirdCollision && fourthCollision;
  };

  update = () => {
    this.background.update();
    this.collisionFloorBlocks.forEach((collisionBlock) => collisionBlock.update());
    this.collisionPlatformBlocks.forEach((collisionBlock) => collisionBlock.update());
    this.player.update();
  };

  animate = (time) => {
    if (time - this.lastFrameTime < this.FRAME_MIN_TIME) {
      return window.requestAnimationFrame(this.animate);
    }

    this.lastFrameTime = time;

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    window.requestAnimationFrame(this.animate);

    this.context.save();
    this.context.scale(4, 4);
    this.context.translate(this.camera.position.x, this.camera.position.y);

    this.update();

    this.context.restore();
  };
}

export default Game;