class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        //load Audio
        this.load.audio('sfx_select', './assets/Blip_Select.wav');
        this.load.audio(1, './assets/Explosion1.wav');
        this.load.audio(2, './assets/Explosion2.wav');
        this.load.audio(3, './assets/Explosion3.wav');
        this.load.audio(4, './assets/Explosion4.wav');
        // this.load.audio('sfx_rocket', './assets/Rocket_Flight.wav');

    }

    create() {
        // menu test config
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#FFFFFF',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5
            },
            fixedWidth: 0
        }

        //show menu text
        this.add.text(game.config.width/2, game.config.height/4 - borderUISize - borderPadding, 
        'ROCKET PACIFIST', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/4, 
        'Use UP (P2:W) and DOWN (P2:S) to move', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/4 + borderUISize + borderPadding, 
        'Avoid hitting the planes!', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#FDF000';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/4 + borderUISize*4 + borderPadding*2, 
        'P1 Difficulty:\nToddler: LEFT\nPro-Gamer: RIGHT', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/4 + borderUISize*8 + borderPadding*2, 
        'P2 Difficulty:\nToddlers: UP\nPro-Gamers: DOWN', menuConfig).setOrigin(0.5);

        
        //define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            //easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 45000
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            //hard mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 60000
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }
        if (Phaser.Input.Keyboard.JustDown(keyUP)) {
            //easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 45000
            }
            this.sound.play('sfx_select');
            this.scene.start('twoPlayer');
        }
        if (Phaser.Input.Keyboard.JustDown(keyDOWN)) {
            //hard mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 60000
            }
            this.sound.play('sfx_select');
            this.scene.start('twoPlayer');
        }
    }
}