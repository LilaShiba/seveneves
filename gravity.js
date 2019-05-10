function Gravity(){
  this.pos = createVector(width/2, height/2);
  this.mass = 10
  this.G = 6.687

  this.attraction = function(m){
    // force direction
    // a vector has both magnitude and direction
    // in p5, it is a euclidean vector
    // Since vectors represent groupings of values,
    // we cannot simply use traditional addition/multiplication/et
    // must do vector math
    // thanks p5!
    let force = p5.Vector.sub(this.pos, m.pos)
    // distance between things
    let distance = force.mag();
    // thats a lot of power, reduce please
    // min, max
    distance = constrain(distance, 5, 80);
    // make it a unit vector
    force.normalize();
    // Gravity
    let strength = (this.G * this.mass * m.mass)/(distance*distance);
    force.mult(strength);
    return force;
  }

  this.eat = function(object){
    for (var i = 0; i < object.length; i++){
      var d = this.pos.dist(object[i].pos);
      if (d < 10){
        object.splice(i, 1);
        return true;
      }
    }
  }

  this.display = function(){
    ellipseMode(CENTER);
    strokeWeight(255);
    stroke(1);
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.mass * 2, this.mass * 2)
  }
}
