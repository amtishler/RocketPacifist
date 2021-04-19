class Meanship extends  Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);  //add to existing scene
        this.points = pointValue;
        this.moveSpeed = game.settings.spaceshipSpeed + 2;
    }

    update() {
        //move spaceship left
        this.x -= this.moveSpeed;
    }
}