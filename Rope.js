class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.004,
            length: 10
        }
        this.Rope = Constraint.create(options);
        World.add(world, this.Rope);
        this.pointB=pointB;
    }

    fly(){
        this.Rope.bodyA=null;
    }

    attach(body){
        this.rope.bodyA = body;
    }

    display(){
        if(this.Rope.bodyA){
            var pointA = this.Rope.bodyA.position;
            var posB = this.pointB;
            strokeWeight(4);
            line(pointA.x,pointA.y,posB.x=240,posB.y=420)
        }
    }
}