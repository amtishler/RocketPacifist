class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        //load images/tile sprites
        this.load.image('rocket', './assets/PeaceRocket1.png');
        this.load.image('spaceship', './assets/airplane1.png');
        this.load.image('airplane2', './assets/airplane2.png');
        this.load.image('cloud1', './assets/cloud1.png');
        this.load.image('cloud3', './assets/cloud3.png');
        //this.load.image('starfield', './assets/starfield.png');
        //load spritesheet
        this.load.spritesheet('explosion', './assets/explosion.png', {
            frameWidth: 64,
            frameHeight: 32,
            startFrame: 0,
            endFrame: 9
        });
    }

    create() {
        //place starfield
        //this.starfield = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'starfield').setOrigin(0, 0);

        //green UI background
        //this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0, 0);

        //add clouds
        this.cloud1 = new Cloud(this, game.config.width + borderUISize*4, borderUISize*5, 'cloud1', 0).setOrigin(0, 0);
        this.cloud2 = new Cloud(this, game.config.width - borderUISize*10, -borderUISize*4, 'cloud3', 0).setOrigin(0, 0);

        //add rocket p1
        this.p1Rocket = new Rocket(this, game.config.width/8, game.config.height/4 - borderPadding, 'rocket').setOrigin(0.5, 0);

        //add spaceship (x3)
        this.ship01 = new Spaceship(this, game.config.width + borderUISize*12, borderUISize*4, 'spaceship', 0, 30).setOrigin(0, 0);
        this.ship02 = new Spaceship(this, game.config.width + borderUISize*6, borderUISize*8 + borderPadding*2, 'spaceship', 0, 20).setOrigin(0, 0);
        this.ship03 = new Spaceship(this, game.config.width, borderUISize*10 + borderPadding*4, 'spaceship', 0, 10).setOrigin(0, 0);
        this.ship04 = new Spaceship(this, game.config.width + borderUISize*3, borderUISize*2, 'spaceship', 0, 30).setOrigin(0, 0);
        this.ship05 = new Spaceship(this, game.config.width + borderUISize*5, borderUISize*6, 'spaceship', 0, 30).setOrigin(0, 0);
        this.ship06 = new Meanship(this, game.config.width, this.p1Rocket.y, 'airplane2', 0, 30).setOrigin(0, 0);
        this.ship07 = new Meanship(this, game.config.width*1.5, this.p1Rocket.y, 'airplane2', 0, 30).setOrigin(0, 0);

        //white borders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        
        //define keys
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

        //animation config
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', {
                start: 0,
                end: 9,
                first: 0
            }),
            frameRate: 30
        });

        //initialize score
        //this.p1Score = 0;
        //display score
        let scoreConfig = {
            fontFamily: 'Times',
            fontSize: '28px',
            backgroundColor: '#FFFFFF',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5
            },
            fixedWidth: 100
        }
        // this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*2, this.p1Score, scoreConfig);

        //GAME OVER flag
        this.gameOver = false;
        
        //60 second play clock
        scoreConfig.fixedWidth = 0;
        this.clock = this.time.delayedCall(game.settings.gameTimer, () => {
            if (this.gameOver == false) {
                this.add.text(game.config.width/2, game.config.height/2, 
                'YOU WIN!\nPress (R) to Restart\n (A) for Two player\nor <- for Menu', scoreConfig).setOrigin(0.5);
                //this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (R) to Restart or <- for Menu', scoreConfig).setOrigin(0.5);
                this.gameOver = true;
            }
        }, null, this);
    }

    update() {       
        //check key input for restart
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.restart();
        }
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            this.scene.start("menuScene");
        }
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyA)) {
            this.scene.start("twoPlayer");
        }     
        
        //this.starfield.tilePositionX -= starspeed;

        if (!this.gameOver){
            //update rocket
            this.p1Rocket.update();

            //update spaceships
            this.ship01.update();
            this.ship02.update();
            this.ship03.update();
            this.ship04.update();
            this.ship05.update();
            this.ship06.update();
            this.ship07.update();

            //update clouds
            this.cloud1.update();
            this.cloud2.update();
        }        

        //check collisions
        if (this.checkCollision(this.p1Rocket, this.ship01)) {
            // this.p1Rocket.reset();
            this.shipExplode(this.p1Rocket, this.ship01);
        }
        if (this.checkCollision(this.p1Rocket, this.ship02)) {
            //this.p1Rocket.reset();
            this.shipExplode(this.p1Rocket, this.ship02);
        }
        if (this.checkCollision(this.p1Rocket, this.ship03)) {
            //this.p1Rocket.reset();
            this.shipExplode(this.p1Rocket, this.ship03);
        }
        if (this.checkCollision(this.p1Rocket, this.ship04)) {
            //this.p1Rocket.reset();
            this.shipExplode(this.p1Rocket, this.ship04);
        }
        if (this.checkCollision(this.p1Rocket, this.ship05)) {
            //this.p1Rocket.reset();
            this.shipExplode(this.p1Rocket, this.ship05);
        }
        if (this.checkCollision(this.p1Rocket, this.ship06)) {
            //this.p1Rocket.reset();
            this.shipExplode(this.p1Rocket, this.ship06);
        }
        if (this.checkCollision(this.p1Rocket, this.ship07)) {
            //this.p1Rocket.reset();
            this.shipExplode(this.p1Rocket, this.ship07);
        }

        //Meanship reposition
        //wrap around from left to right
        if(this.ship06.x <= 0 - this.ship06.width) {
            this.meanshipReset(this.ship06);
        }
        if(this.ship07.x <= 0 - this.ship07.width) {
            this.meanshipReset(this.ship07);
        }
    }

    //meanship position reset
    meanshipReset(ship) {
        ship.x = game.config.width;
        ship.y = this.p1Rocket.y;
    }

    checkCollision(rocket, ship) {
        //simple AABB checking
        if (rocket.x < ship.x + ship.width && 
            rocket.x + rocket.width > ship.x &&
            rocket.y + 5 < ship.y + ship.height &&
            rocket.height + rocket.y > ship.y) {
                return true;
        } else {
            return false;
        }
    }

    shipExplode(rocket, ship) {
        //temporarily hide ship
        // ship.alpha = 0;
        //hide rocket
        rocket.alpha = 0;
        //create explosion sprite
        let boom = this.add.sprite(ship.x, ship.y, 'explosion').setOrigin(0, 0);
        boom.anims.play('explode');
        boom.on('animationcomplete', () => {
            ship.x = game.config.width;
            boom.destroy();
        });
        //score add and repaint
        //this.p1Score += ship.points;
        //this.scoreLeft.text = this.p1Score;

        let endGame = {
            fontFamily: 'Times',
            fontSize: '28px',
            backgroundColor: '#FFFFFF',
            color: '#843605',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5
            },
            fixedWidth: 100
        }

        //end game
        endGame.fixedWidth = 0;
        this.add.text(game.config.width/2, game.config.height/2, 
        'YOU LOSE!\nPress (R) to Restart\n (A) for Two player\nor <- for Menu', endGame).setOrigin(0.5);
        //this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (R) to Restart or <- for Menu', endGame).setOrigin(0.5);
        this.gameOver = true;

        //sfx for explosion
        this.sound.play('sfx_explosion')
    }
}