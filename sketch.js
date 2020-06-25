function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(GAME_FRAME_RATE);
    currentScene = 'startupScene';
    buttonManager = new ButtonManager('Start Game', width/2, height/2);
    game = new Game();
    game.setup();
    startup = new Startup();
    scenes = {
        gameScene: game,
        startupScene: startup
    };
}

function keyPressed() {
    game.keyPressed(key)
}

function draw() {
    scenes[currentScene].draw();
}
