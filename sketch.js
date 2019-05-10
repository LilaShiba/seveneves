var ships = [];
var earth;

function setup(){
  createCanvas(800,800);
  earth = new Gravity();

  for (var i=0; i < 8; i++){
    x = random(100,140);
    y = random(100,200);
    m = 6;
    ships[i] = new Ship(x,y,m)
  }
}

function draw(){
  background(0);
  earth.display();

  for (s of ships){
    let force = earth.attraction(s);
    s.applyForce(force);
    s.display();
    earth.eat(ships);
    s.update();

    for (ss of ships){
      if(s.intersects(ss) && random(1) < 0.001){
        s.health -= 0.2;
        ships.push(new Ship(s.pos.x, s.pos.y, s.mass/2));
        if(s.mass <0.1 || s.mass <0.1){
          ships.pop(s);
        }


      }
    }
  }

}
