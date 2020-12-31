class Chain{
    constructor(body,point){
        var options={
            bodyA:body,
            pointB:point
        }

       this.chain=Constraint.create(options) ;
       this.pointB=point;
       World.add(myWorld,this.chain);
    }

    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.pointB;
        stroke("red");
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
