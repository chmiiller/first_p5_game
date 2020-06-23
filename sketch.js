const BG_SPEED = 2;
const GAME_FRAME_RATE = 40;

let imgBackground;
let imgHero;
let imgEnemy;

let bgMusic;

let scenario;
let hero;
let enemy;

let heroMatrix = []
let enemyMatrix = []

// Creating hero
const heroSprite = {
    matrixRows: 4,
    matrixColumns: 4,
    w: 220,
    h: 270,
    halfW: 110,
    halfH: 135,
    imagePath: "/assets/images/hero/running.png",
};

for (let r = 0; r < heroSprite.matrixRows; r++) {
    for (let c = 0; c < heroSprite.matrixColumns; c++) {
        heroMatrix.push({
            x: heroSprite.w * c,
            y: heroSprite.h * r,
        });
    }
}

// Creating enemy
const enemySprite = {
    matrixRows: 7,
    matrixColumns: 4,
    w: 104,
    halfW: 52,
    imagePath: "/assets/images/enemies/drop.png",
};
for (let r = 0; r < enemySprite.matrixRows; r++) {
    for (let c = 0; c < enemySprite.matrixColumns; c++) {
        enemyMatrix.push({
            x: enemySprite.w * c,
            y: enemySprite.w * r,
        });
    }
}

function preload() {
    imgBackground = loadImage("/assets/images/background/forest.png");
    imgHero = loadImage(heroSprite.imagePath);
    imgEnemy = loadImage(enemySprite.imagePath);
    bgMusic = loadSound("/assets/audio/bg_music.mp3");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    scenario = new Scenario(imgBackground, BG_SPEED);
    frameRate(GAME_FRAME_RATE);
    // bgMusic.loop();
  
    hero = new Hero(heroMatrix, imgHero, 0, heroSprite.halfW, heroSprite.halfH, heroSprite.w, heroSprite.h);
    enemy = new Enemy(enemyMatrix, imgEnemy, width - enemySprite.halfW, enemySprite.halfW, enemySprite.halfW, enemySprite.w, enemySprite.w);
}

function keyPressed() {
    if (key === 'ArrowUp') {
        hero.jump();
    }
}

function draw() {
    scenario.render();
    scenario.move();

    if (keyIsDown(RIGHT_ARROW)) {
        hero.walk('right');
    }
    
    if (keyIsDown(LEFT_ARROW)) {
        hero.walk('left');
    }

    hero.render();
    hero.applyGravity();

    enemy.render();
    enemy.walk();

    if (hero.collisionCheck(enemy)) {
        noLoop();
    }
}
