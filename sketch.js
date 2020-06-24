const BG_SPEED = 2;
const GAME_FRAME_RATE = 40;

let imgBackground;
let bgMusic;
let scenario;
let score;
let gameOverImage;

// Creating hero
let hero;
let heroMatrix = []
let imgHero;
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

const enemies = [];
// Setting up enemy
let enemyMatrix = []
let imgEnemy;
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

// Creating troll
let enemyTrollMatrix = []
let imgEnemyTroll;
const enemyTrollSprite = {
    matrixRows: 6,
    matrixColumns: 5,
    matrixSize: 28,
    frameCount: 0,
    w: 400,
    halfW: 200,
    imagePath: "/assets/images/enemies/troll.png",
};
for (let r = 0; r < enemyTrollSprite.matrixRows; r++) {
    for (let c = 0; c < enemyTrollSprite.matrixColumns; c++) {
        enemyTrollMatrix.push({
            x: enemyTrollSprite.w * c,
            y: enemyTrollSprite.w * r,
        });
        enemyTrollSprite.frameCount++
        if(enemyTrollSprite.frameCount > enemyTrollSprite.matrixSize){
            break;
        }
    }
}

// Creating flying
let enemyFlyingMatrix = []
let imgEnemyFlying;
const enemyFlyingSprite = {
    matrixRows: 6,
    matrixColumns: 3,
    matrixSize: 16,
    frameCount: 0,
    w: 200,
    h: 150,
    halfW: 100,
    halfH: 75,
    imagePath: "/assets/images/enemies/flying-drop.png",
};
for (let r = 0; r < enemyFlyingSprite.matrixRows; r++) {
    for (let c = 0; c < enemyFlyingSprite.matrixColumns; c++) {
        enemyFlyingMatrix.push({
            x: enemyFlyingSprite.w * c,
            y: enemyFlyingSprite.h * r,
        });
        enemyFlyingSprite.frameCount++
        if(enemyFlyingSprite.frameCount > enemyFlyingSprite.matrixSize){
            break;
        }
    }
}

function preload() {
    imgBackground = loadImage("/assets/images/background/forest.png");
    imgHero = loadImage(heroSprite.imagePath);
    imgEnemy = loadImage(enemySprite.imagePath);
    imgEnemyTroll = loadImage(enemyTrollSprite.imagePath);
    imgEnemyFlying = loadImage(enemyFlyingSprite.imagePath);
    gameOverImage = loadImage("/assets/images/assets/game-over.png");
    bgMusic = loadSound("/assets/audio/bg_music.mp3");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    scenario = new Scenario(imgBackground, BG_SPEED);
    score = new Score();
    frameRate(GAME_FRAME_RATE);
    // bgMusic.loop();
  
    hero = new Hero(heroMatrix, imgHero, 0, 30, heroSprite.halfW, heroSprite.halfH, heroSprite.w, heroSprite.h);
    const enemy = new Enemy(enemyMatrix, imgEnemy, width - enemySprite.halfW, 30, enemySprite.halfW, enemySprite.halfW, enemySprite.w, enemySprite.w);
    
    const enemyTroll = new Enemy(enemyTrollMatrix, imgEnemyTroll, width - enemyTrollSprite.halfW, 0, enemyTrollSprite.halfW, enemyTrollSprite.halfW, enemyTrollSprite.w, enemyTrollSprite.w);
    enemyTroll.setDelay(200);
    
    const enemyFlying = new Enemy(enemyFlyingMatrix, imgEnemyFlying, 0, 250, enemyFlyingSprite.halfW, enemyFlyingSprite.halfH, enemyFlyingSprite.w, enemyFlyingSprite.h);
    enemyFlying.setDelay(2200);

    enemies.push(enemy);
    enemies.push(enemyTroll);
    enemies.push(enemyFlying);
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

    enemies.forEach(enemy => {
        enemy.render();
        enemy.walk();
        if (hero.collisionCheck(enemy)) {
            noLoop();
            image(gameOverImage, width * 0.5 - 200, height * 0.5 - 40);
        }
    });

    score.displayScore();
    score.addScore();
}
