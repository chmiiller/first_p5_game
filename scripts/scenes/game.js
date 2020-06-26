class Game {
    constructor() {
        this.currentEnemyIndex = 0;
        this.stage = level.map;
    }

    setup() {
        scenario = new Scenario(imgBackground, BG_SPEED);
        score = new Score();
        life = new Life(level.settings.maxLife, level.settings.initialLife);
    
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

        life.draw();
    
        if (keyIsDown(RIGHT_ARROW)) {
            hero.walk('right');
        }
        
        if (keyIsDown(LEFT_ARROW)) {
            hero.walk('left');
        }
    
        hero.render();
        hero.applyGravity();
        
        const currentStage = this.stage[this.currentEnemyIndex];
        const currentEnemy = enemies[currentStage.enemy];
        currentEnemy.speed = currentStage.speed;
        const isEnemyOnScreen = currentEnemy.x < -(currentEnemy.imageWidth+100);
    
        currentEnemy.render();
        currentEnemy.walk();
    
        if (isEnemyOnScreen) {
            this.currentEnemyIndex++;
            currentEnemy.enterScene();
            if (this.currentEnemyIndex > this.stage.length-1) {
                this.currentEnemyIndex = 0;
            }
        }
    
        if (hero.collisionCheck(currentEnemy)) {
            life.oneLost();
            hero.setInvincible();
            if (life.current === 0) {
                image(gameOverImage, width * 0.5 - 200, height * 0.5 - 40);
                noLoop();
            }
        }
    
        score.displayScore();
        score.addScore();
    }
}