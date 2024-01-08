// class Enemy {
//   constructor(args) {
//     //whatever
//   }
//
//   update(dt) {
//     //example of how to use delta time
//     this.x += this.vel * dt;
//   }
//
//   render(ctx) {
//     //etc
//   }
// }
//
// class Game {
//   constructor() {
//     const canvas = document.createElement('canvas');
//     document.appendChild(canvas);
//     this.ctx = canvas.getContext('2d');
//     this.dt = 1 / 60;
//     this.last_time = 0;
//     this.accumulated_time = 0;
//     this.entities = [];
//     this.entities.push(
//       new Enemy(args)
//     );
//   }
//
//   tick(time) {
//     this.accumulated_time += (time - this.last_time) / 1000;
//     // if a user leaves the tab.
//     // RAF will stop firing, however the following while loop condition could get stuck otherwise due to time still increasing.
//     // this is a stop limit in those cases:
//     if (this.accumulated_time > 200) {
//       this.accumulated_time = 200;
//     }
//
//     while (this.accumulated_time > this.dt) {
//       this.entities.forEach(e => e.update(this.dt));
//       this.accumulated_time -= this.dt;
//     }
//
//     this.entities.forEach(e => e.render(this.ctx));
//     this.last_time = time;
//
//     //mock pretending if client got 5fps behavior
//     setTimeout(this.tick.bind(this), 1000/5, performance.now())
//
//     requestAnimationFrame(this.tick.bind(this));
//   }
// }