import {
  GameStates
} from "./GameStates.mjs";

class EndScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'EndScene'
    });
  }

  preload() {
    this.load.image('endScreen', 'https://content.codecademy.com/courses/learn-phaser/mole-unearther/game-over.png');
  }

  create() {
    const background = this.add.image(0, 0, 'endScreen');
    background.setOrigin(0);
    background.setScale(0.5);

    this.input.on('pointerup', () => {
      GameStates.score = 0;
      GameStates.timeLeft = 30;
      GameStates.isPaused = false;

      this.scene.start('GameScene');
      this.scene.stop('EndScene');
    });

    this.add.text(163, 470, `Your score is ${GameStates.score}.`).setColor('#553a1f');
  }
}

export {
  EndScene
};