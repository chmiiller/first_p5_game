class Game {
    constructor() {
        this.currentEnemyIndex = 0;
    }

    setup() {
        scenario = new Scenario(imgBackground, BG_SPEED);
        score = new Score();
    
        // bgMusic.loop();
  
        hero = new Hero(heroMatrix, imgHero, 0, 30, heroSprite.halfW, heroSprite.halfH, heroSprite.w, heroSprite.h);
        const enemy = new Enemy(enemyMatrix, imgEnemy, width - enemySprite.halfW, 30, enemySprite.halfW, enemySprite.halfW, enemySprite.w, enemySprite.w);
        
        const enemyTroll = new Enemy(enemyTrollMatrix, imgEnemyTroll, width - enemyTrollSprite.halfW, 0, enemyTrollSprite.halfW, enemyTrollSprite.halfW, enemyTrollSprite.w, enemyTrollSprite.w);
        
        const enemyFlying = new Enemy(enemyFlyingMatrix, imgEnemyFlying, 0, 250, enemyFlyingSprite.halfW, enemyFlyingSprite.halfH, enemyFlyingSprite.w, enemyFlyingSprite.h);

        enemies.push(enemy);
        enemies.push(enemyTroll);
        enemies.push(enemyFlying);
    }

    keyPressed(key) {
        if (key === 'ArrowUp') {
            hero.jump();
        }
    }

    draw() {
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
    
        const currentEnemy = enemies[this.currentEnemyIndex];
        const isEnemyOnScreen = currentEnemy.x < -(currentEnemy.imageWidth+10);
    
        
        currentEnemy.render();
        currentEnemy.walk();
    
        if (isEnemyOnScreen) {
            this.currentEnemyIndex++;
            if (this.currentEnemyIndex > enemies.length-1) {
                this.currentEnemyIndex = 0;
            }
            currentEnemy.speed = parseInt(random(12,25));
        }
    
        if (hero.collisionCheck(currentEnemy)) {
            noLoop();
            image(gameOverImage, width * 0.5 - 200, height * 0.5 - 40);
        }
    
        score.displayScore();
        score.addScore();
    }
}