class Computer {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

        World.add(world, this.body);

        this.life1 = "red";

        this.life2 = "red";
    
        this.life3 = "red";
  }

   display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }

  life() {
    push();
    textSize(20);
    fill("white");
    text("Computer", 700, 40);
  
    fill(this.life1);
    rect(700,50,70,30);
    fill(this.life2);
    rect(770,50,70,30);
    fill(this.life3);
    fill(840,50,70,30);
    pop();
  
  }
}
