import "@/style.css";

import { Game } from "phaser";

import { BootScene } from "@/scenes/BootScene";
import { PreloaderScene } from "@/scenes/PreloaderScene";
import { MainMenuScene } from "@/scenes/MainMenuScene";

document.addEventListener("DOMContentLoaded", function () {
  //  Find out more information about the Game Config at:
  //  https://newdocs.phaser.io/docs/3.87.0/Phaser.Types.Core.GameConfig
  new Game({
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    title: "Icarling",
    pixelArt: true,
    roundPixels: true,
    parent: "app",
    backgroundColor: "#000",
    scale: {
      autoRound: true,
      width: 1024,
      height: 768,
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
      BootScene,
      PreloaderScene,
      MainMenuScene
    ]
  });
});