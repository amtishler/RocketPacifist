class Cloud extends  Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);  //add to existing scene
    }

    update() {
        //move cloud left
        this.x -= 1;
        //wrap around from left to right
        if(this.x <= 0 - this.width) {
            this.reset();
        }
    }

    //position reset
    reset() {
        this.x = game.config.width;
    }
}