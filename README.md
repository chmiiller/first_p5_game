# First P5.js Game

First time writing a P5.js game based on [Alura's tutorial](https://www.alura.com.br/imersao-gamedev-javascript/)

### Prerequisites

What you will need to run this game:

```
Chrome
Visual Studio Code
Visual Studio Code Live Server Extension
```

### Installing

Clone the project and open it with Visual Studio Code

```
git clone https://github.com/chmiiller/first_p5_game.git
cd path/project
code ./
```

Once you have the project loaded on your VSCode editor, install Live Server extension by opening the extensions tab of VSCode and search for *Live Server* or through [this URL](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

Now back to your project explorer, open the *index.html* file and at the bottom of VSCode window at the status bar, you will find the "Go Live" button. Click on it and you are ready to test your game on Chrome. If Chrome is not your default browser, make sure you copy the URL opened by Live Server and open it on Chrome manually.

### Where to start

This project is built using P5.js library and as their documentation recommends, the library is imported on index.html and the main JS file is *sketch.js*. All other classes are inside *./scripts/game/* and assets inside, well, *./assets*

### Some code styling

I'm trying as much as I can to use JS ES6 best practices in this project but must important is to avoid duplicated code and hardcoded values. I prefer having constants with values and all of them with capital letter names for example:

```
const SPRITE_COLUMNS = 4;
const SPRITE_WIDTH = 220;
```

or :

```
const BG_SPEED = 2;
const GAME_FRAME_RATE = 40;
```

## Chores

* Create enemy class constructor arguments (too many)
* Collision between troll and hero is bad
* Power ups
* Life Up
* Invincible Sprites
* End of level

## Built With

* [P5.js](https://p5js.org) - The game library used
* [Artwork](https://pipoya.itch.io/pipoya-free-2d-game-character-sprites) - PIPOYA
* [Soundtrack](https://twitter.com/guilhermebzlima) - By Guilherme Lima

## Contributing

For contributions, please use GitHub's Pull Requests feature.

## Original Tutorial Authors

* **Juliana Negreiros** - [Twitter](https://twitter.com/juunegreiros)
* **Guilherme Lima** - [Twitter](https://twitter.com/guilhermebzlima)
* **Paulo Silveira** - [Twitter](https://twitter.com/paulo_caelum)

## Acknowledgments

* **[Daniela Trindade](https://github.com/dadaniela)** for supporting me and saying that every thing I make looks cool 🖤
* **[Gabriel Pires](https://github.com/gabrielpires)** for inviting me to join this small and fun project

