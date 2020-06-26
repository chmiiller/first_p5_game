function preload() {
    imgBackground = loadImage("first_p5_game/assets/images/background/forest.png");
    imgHero = loadImage(heroSprite.imagePath);
    imgEnemy = loadImage(enemySprite.imagePath);
    imgEnemyTroll = loadImage(enemyTrollSprite.imagePath);
    imgEnemyFlying = loadImage(enemyFlyingSprite.imagePath);
    gameOverImage = loadImage("first_p5_game/assets/images/assets/game-over.png");
    startupImage = loadImage("first_p5_game/assets/images/assets/start_bg.png");
    heartImage = loadImage("first_p5_game/assets/images/assets/heart.png");
    startupFont = loadFont("first_p5_game/assets/images/assets/fontStart.otf");
    bgMusic = loadSound("first_p5_game/assets/audio/bg_music.mp3");

    // Levels
    level = loadJSON("first_p5_game/levels/01.json");
}