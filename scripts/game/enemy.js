class Enemy extends Animation {
    constructor(matrix, image, x, imageWidth, imageHeight, spriteWidth, spriteHeight) {
        super(matrix, image, x, imageWidth, imageHeight, spriteWidth, spriteHeight);
        this.initialSpeed = 5;
        this.maxSpeed = 10;
        this.minSpeed = 4;
        this.speed = this.initialSpeed;
    }

    walk() {
        this.x -= this.speed;
        if (this.x < -this.imageWidth) {
            this.x = width;
            this.setSpeed();
        }
    }

    setSpeed() {
        this.speed = Math.random() * (this.maxSpeed - this.minSpeed) + this.minSpeed;
    }
}