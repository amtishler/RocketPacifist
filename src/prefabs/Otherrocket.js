class Otherrocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        //add object to existing scene
        scene.add.existing(this);
        this.moveSpeed = 2;     //pixels per frame
    }

    update() {
        //up and down movement
        if(!this.isFiring) {
            if(keyW.isDown && this.y >= borderUISize + this.height) {
                this.y -= this.moveSpeed;
            } else if (keyS.isDown && this.y <= game.config.height - borderUISize - this.height) {
                this.y += this.moveSpeed;
            }
        }
    }

    //reset rocket to ground
    reset() {
        this.y = game.config.height - borderUISize - borderPadding;
    }
}