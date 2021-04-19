class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        //add object to existing scene
        scene.add.existing(this);
        this.isFiring = false;      //track status of rocket firing
        this.moveSpeed = 2;     //pixels per frame
        // this.sfxRocket = scene.sound.add('sfx_rocket', {
        //     mute: false,
        //     volume: 0.5,
        //     rate: 1,
        //     detune: 0,
        //     seek: 0,
        //     loop: true,
        //     delay: 0
        //}); //add rocket sfx
    }

    update() {
        //left and right movement
        if(!this.isFiring) {
            if(keyUP.isDown && this.y >= borderUISize + this.height) {
                this.y -= this.moveSpeed;
            } else if (keyDOWN.isDown && this.y <= game.config.height - borderUISize - this.height) {
                this.y += this.moveSpeed;
            }
        }
        // if(!this.isFiring) {
        //     if(keyW.isDown && this.y >= borderUISize + this.height) {
        //         this.y -= this.moveSpeed;
        //     } else if (keyS.isDown && this.y <= game.config.height - borderUISize - this.height) {
        //         this.y += this.moveSpeed;
        //     }
        // }

        //fire button
        // if(Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) {
        //     this.isFiring = true;
        //     this.sfxRocket.play(); //play sfx
        // }
        //if fired, move rocket up
        // if(this.isFiring && this.y >= borderUISize*3 + borderPadding){
        //     this.y -= this.moveSpeed;
        // }
        // if(this.isFiring && this.y >= borderUISize*3 + borderPadding*){
        //     this.y -= this.moveSpeed;
        // }
        //reset on miss
        // if(this.y <= borderUISize*3 + borderPadding){
        //     this.reset();
        // }
    }

    //reset rocket to ground
    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}