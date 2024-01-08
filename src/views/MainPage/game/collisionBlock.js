export default class CollisionBlock {
  constructor(game, {position, width = 16, height = 16}) {
    this.game = game;
    this.position = position;
    this.width = width;
    this.height = height;
  }

  draw = () => {
    if (this.game.debugMode) {
      this.game.context.fillStyle = 'rgba(255, 0, 0, 0.2)';
      this.game.context.fillRect(
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    }
  };

  update = () => {
    this.draw();
  };
}