class Gameover extends Phaser.Scene {
    constructor() {
        super("GameoverScene");
    }
    init(){

    }
    create(data){
        this.rKey = this.input.keyboard.addKey('ENTER');
        this.min = data;
        if(typeof(this.min)!="number"){this.min = 0;}
        //if(!this.sec){this.sec=0;}
        my.sprite.gameover = this.add.sprite(720,450,"gameover_screen");
        //my.sprite.stext = this.add.bitmapText(450,300, 'cfont', "LEVEL COMPLETE!");
        //my.sprite.text.setScale(1.05);
        //my.sprite.stext.tint = 0x22334;
        my.sprite.text = this.add.bitmapText(450,300, 'cfont', "LEVEL COMPLETE!");
        my.sprite.text = this.add.bitmapText(450,350, 'cfont',"Time: " + this.min + " seconds");
        my.sprite.text.setScale(.8);
        my.sprite.text = this.add.bitmapText(400,800, 'cfont',"Press Enter to Retry!");

    }
    update(){
        if(Phaser.Input.Keyboard.JustDown(this.rKey)) {
            this.scene.restart("platformerScene");this.scene.start("platformerScene");
        }
    }
}