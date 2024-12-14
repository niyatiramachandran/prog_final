let angle = 0;
let rad = 0;
let sinval;
let cosval;
let x = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(color("purple"));

  for (let cloversize = 200; cloversize >= 10; cloversize -= 10) {
    let myClover = new Clover(
      getRandomInt(0, 255),
      getRandomInt(0, 255),
      getRandomInt(0, 255),
      cloversize
    );
    myClover.draw_clover();
  }

  stroke(220, 220, 220);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Clover {
  constructor(redNum, greenNum, blueNum, size) {
    this.redNum = redNum;
    this.greenNum = greenNum;
    this.blueNum = blueNum;
    this.size = size;
  }
  draw_clover() {
    let currx = 200;
    let curry = 200;
    stroke(this.redNum, this.greenNum, this.blueNum);
    for (let i = 0; i < this.size; i++) {
      strokeWeight(i);
      point(currx, curry);
      if (i % 4 == 0) {
        currx += i;
      } else if (i % 4 == 1) {
        curry += i;
      } else if (i % 4 == 2) {
        currx -= i;
      } else if (i % 4 == 3) {
        curry -= i;
      }
    }
  }
}

function draw() {
  x += 1;
  sinval = sin(x / (PI * 4));
  cosval = cos(x / (PI * 4));
  rad = map(sinval, -1, 1, 0, 400);

  if (x % 2 == 0) {
    if (cos(x / (PI * 4)) >= 0) {
      triangle(x, rad, x + 3, rad + 6, x + 6, rad);
    } else {
      triangle(x, rad, x + 3, rad - 6, x + 6, rad);
    }
  }

  x %= 400;
}

function windowResized() { resizeCanvas(windowWidth, windowHeight); }

