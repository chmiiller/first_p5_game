class Hero extends Animation {
    constructor(matrix, image, x, imageWidth, imageHeight, spriteWidth, spriteHeight) {
        super(matrix, image, x, imageWidth, imageHeight, spriteWidth, spriteHeight);
        
        this.halfWidth = this.imageWidth * 0.5;
        this.halfHeight = this.imageHeight * 0.5;

        this.screenRightLimit = width - (this.imageWidth * 0.8);

        this.posY = height - imageHeight;
        this.y = this.posY;

        this.jumpForce = 0;
        this.gravity = 5;
        this.jumpCount = 0;

        this.hitBoxOffset = 0.7;
        this.jumpSound = loadSound("/../../assets/audio/jump.mp3");
    }

    jump() {
        if(this.jumpCount < 2){
            this.jumpSound.play();
            this.jumpForce = -40;
            this.jumpCount++;
        }
    }

    applyGravity() {
        this.y += this.jumpForce;
        this.jumpForce += this.gravity;
        if (this.y > this.posY) {
            this.y = this.posY;
            this.jumpForce = 0;
            this.jumpCount = 0;
        }
    }

    walk(direction){
        switch (direction) {
            case 'left':
                if (this.x > 0) {
                    this.x -= 10;
                }
                
                break;
            
            case 'right':
                if (this.x < this.screenRightLimit) {
                    this.x += 10;
                }
                break;
        
            default:
                this.x += 10;
                break;
        }
    }

    collisionCheck(enemy) {
        return collideRectRect(
            this.x,
            this.y,
            this.imageWidth * this.hitBoxOffset,
            this.imageHeight * this.hitBoxOffset,
            enemy.x,
            enemy.y,
            enemy.imageWidth * this.hitBoxOffset,
            enemy.imageHeight * this.hitBoxOffset,
        );
    }
}
