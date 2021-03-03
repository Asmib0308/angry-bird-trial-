class Pig{
    constructor(x,y){
        var option2 = {
            restitution: 0.5,
            friction:0.3,
            density:1.0
        }
        this.body = Bodies.rectangle(x,y,50,50,option2);
        World.add(world,this.body);
        this.width = 50;
        this.height = 50;
        console.log(this.body)
    }
    display(){
        rectMode(CENTER);
        var pos = this.body.position;
        push ()
        translate (pos.x,pos.y)
        rotate (this.body.angle)
        fill("green")
        rect(0,0,this.width,this.height);
        pop ()
    }
}