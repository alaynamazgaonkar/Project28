class Tree extends BaseClass {
    constructor(x, y, width, height) {
     super(x,y,width,height); 
    this.image=loadImage("tree.png")
    }
    display(){
      // super.display()
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      //rectMode(CENTER);
      image(this.image, 0, 20,300, 400);
      //rect(0, 0, this.width, this.height);
      pop();
     }
  };
  