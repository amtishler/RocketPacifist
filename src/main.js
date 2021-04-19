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