class Enemy extends Animation {
    constructor(matrix, image, x, offsetY = 0, imageWidth, imageHeight, spriteWidth, spriteHeight) {
        super(matrix, image, x, offsetY, imageWidth, imageHeight, spriteWidth, spriteHeight);
        this.initialSpeed = 5;
        this.maxSpeed = 10;
        this.minSpeed = 4;
        this.speed = this.initialSpeed;
        this.delay = 0;
    }

    setDelay(delayValue) {
        this.delay = delayValue;
    }

    walk() {
        this.x -= this.speed;
        if (this.x < -this.imageWidth - this.delay) {
            this.x = width;
            //this.setSpeed();
        }
    }

    setSpeed() {
        this.speed = Math.random() * (this.maxSpeed - this.minSpeed) + this.minSpeed;
    }
}