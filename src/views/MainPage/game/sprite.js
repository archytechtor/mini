export default class Sprite {
  constructor(game, {position, src, frameRate = 1, frameBuffer = 2, scale = 1}) {
    this.game = game;
    this.position = position;
    this.image = new Image();
    this.image.src = src;
    this.image.onload = () => {
      this.width = this.image.width / this.frameRate * this.scale;
      this.height = this.image.height * this.scale;
    };

    this.frameRate = frameRate;
    this.currentFrame = 0;
    this.elapsedFrames = 0;
    this.frameBuffer = frameBuffer;
    this.scale = scale;
  }

  get tick() {
    return this.elapsedFrames % this.frameBuffer === 0;
  }

  draw = () => {
    if (!this.image) {
      return;
    }

    const cropBox = {
      position: {
        x: this.currentFrame * (this.image.width / this.frameRate),
        y: 0
      },
      width: this.image.width / this.frameRate,
      height: this.image.height
    };

    this.game.context.drawImage(
      this.image,
      cropBox.position.x,
      cropBox.position.y,
      cropBox.width,
      cropBox.height,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  };

  update = () => {
    this.draw();
    this.updateFrames();
  };

  updateFrames = () => {
    this.elapsedFrames++;

    if (this.tick) {
      if (this.currentFrame < this.frameRate - 1) {
        this.currentFrame++;
      } else {
        this.currentFrame = 0;
      }
    }
  };
}