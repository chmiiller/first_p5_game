class ButtonManager {
    constructor(label, x, y) {
        this.label = label;
        this.x = x;
        this.y = y;
        this.button = createButton(this.label);
        this.button.mousePressed(() => this._switchScene());
        this.button.addClass('botao-tela-inicial');
    }

    draw() {
        this.button.position(this.x,this.y);
        this.button.center('horizontal');
    }

    _switchScene() {
        this.button.remove();
        currentScene = "gameScene";
    }
}