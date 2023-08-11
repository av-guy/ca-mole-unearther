import {
  StartScene
} from "./scenes/StartScene.mjs";

import {
  GameScene
} from "./scenes/GameScene.mjs";

import {
  EndScene
} from "./scenes/EndScene.mjs";

const Config = {
  type: Phaser.AUTO,
  width: 480,
  height: 640,
  physics: {
    default: 'arcade',
  },
  backgroundColor: 'F8B392',
  scene: [StartScene, GameScene, EndScene],
};

export {
  Config
};