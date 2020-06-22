const BG_SPEED = 2;
const GAME_FRAME_RATE = 40;

let imgBackground;
let imgHero;
let scenario;
let bgMusic;
let hero;


function preload() {
  imgBackground = loadImage('/assets/images/background/forest.png');
  imgHero = loadImage('/assets/images/hero/running.png');
  bgMusic = loadSound('/assets/audio/bg_music.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(imgBackground, BG_SPEED);
  frameRate(GAME_FRAME_RATE);
  // bgMusic.loop();
  hero = new Hero(imgHero);
}

function draw() {
  scenario.render();
  scenario.move();

  hero.render();
}
