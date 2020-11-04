class Polygon  {
    constructor(x,y,width,height)  {
        var options={
            isStatic:false,
            'restitution':1.5,
            'friction':0.1,
            'density':2.0
        }
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.image = loadImage("pics/polygon.png")

        World.add(world,this.body)

    }
    display()  {
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,50,50);

    }
}