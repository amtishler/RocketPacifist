//Aaron Tishler
//Rocket Pacifist
//04/19/21
//9-11 hours

//Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) (60)
//Implement a simultaneous two-player mode (30)
//Create 4 new explosion SFX and randomize which one plays on impact (10)
//Allow the player to control the Rocket after it's fired (5)
//Randomize each spaceship's movement direction at the start of each play (5)
//Create a new scrolling tile sprite for the background (5)
//*Note: Counted 100 initially, happened to do more
//*Note: Didn't notice the "make a copy of repo" rule until now, so I commented out old code

// game configuration
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    backgroundColor: '#1FBED6',
    scene: [Menu, Play, Multiplayer]
}

let game = new Phaser.Game(config);

//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
let starspeed = 4;

//reserve keyboard bindings
let keyR, keyLEFT, keyRIGHT, keyUP, keyDOWN,
    keyA, keyS, keyW;