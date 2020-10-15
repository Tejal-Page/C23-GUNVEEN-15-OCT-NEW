class Box{

  constructor(x, y, width, height){
    this.width=width;
    this.height=height;
    var options={
      restitution:0
    }
    this.body=Bodies.rectangle(x, y, width, height, options);
    World.add(world, this.body);
  }

  display(){
    var angle=this.body.angle;
    var pos=this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER)
    fill("red");
    stroke("black");
    strokeWeight(4);
    rect(0, 0, this.width, this.height);
    pop();
  }
}