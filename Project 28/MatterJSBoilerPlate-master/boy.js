class Boy extends BaseClass {
    constructor(x, y, width, height) {
     
     super(x,y,width,height); 
     this.image=loadImage("boy.png")
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      //rectMode(CENTER);
      image(this.image, 0, 60,100,200);
      //rect(0, 0, this.width, this.height);
      pop();

    }
};
  