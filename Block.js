class Block {
    constructor(x,y,width,height) {
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
      }
      this.block = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.block);
    }
    display(){
      var pos =this.block.position;
      rectMode(CENTER);
      //fill("yellow");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
