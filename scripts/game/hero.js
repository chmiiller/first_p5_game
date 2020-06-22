class Hero {
  constructor(img) {
    const SPRITE_ROWS = 4;
    const SPRITE_COLUMNS = 4;
    const SPRITE_WIDTH = 220;
    const SPRITE_HEIGHT = 270;

    this.image = img;
    this.heroWidth = SPRITE_WIDTH;
    this.heroHeight = SPRITE_HEIGHT;
    this.heroWidthHalf = this.heroWidth * 0.5;
    this.heroHeightHalf = this.heroHeight * 0.5;
    this.currentFrame = 0;
    this.matrix = [];
    
    // Creating sprite matrix
    for(let r = 0; r < SPRITE_ROWS; r++){
        for(let c = 0; c < SPRITE_COLUMNS; c++){
            this.matrix.push({
                x: this.heroWidth * c,
                y: this.heroHeight * r
            });
        }
    }

    this.matrixSize = this.matrix.length - 1;
  }

  render() {
    const posBottom = height - this.heroHeightHalf;
    const spriteX = this.matrix[this.currentFrame].x;
    const spriteY = this.matrix[this.currentFrame].y;
    image(this.image,0,posBottom,this.heroWidthHalf,this.heroHeightHalf,spriteX,spriteY,this.heroWidth,this.heroHeight);
    
    this.move();
  }

  move() {
    this.currentFrame++;
    if (this.currentFrame >= this.matrixSize) {
      this.currentFrame = 0;
    }
  }
}
