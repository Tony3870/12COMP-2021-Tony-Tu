/*********************/
//V1-Creating basic codes and starting to assign variables and constants.
/*********************/

const NUMBEROFBALLS = 1;
const VELRANDOM = [10, 9, 8, 7, -7, -8, -9, -10];
const MIND = 25;
const MAXD = 75;
const COLOUREXP = /^[0-255]/
var score = 0;
var misses = 0;


//Start Up with code
function setup(){




}
/***************************/
//class m_ball
//Function to construct a ball and pass through parameters
/***************************/
class m_ball {
  constructor(_velRandom, _minD, _maxD,_colour) {
    this.x = width / 2;
    this.y = height / 2;
    this.spdX = random(_velRandom);
    this.spdY = random(_velRandom);
    this.red = random(_colour);
    this.green = random(_colour);
    this.blue = random(_colour);
    this.ransparency = random(_colour);
    this.diameter = random(_minD, _maxD);
  }
  //Creates the ball and chooses a random colour from 0-255 values
  display() {
    fill(this.red, this.green, this.blue, this.transparency)
    ellipse(this.x, this.y, this.diameter);
  }
  //Allows the ball to move around
  move() {
    this.x = this.x + this.spdX;
    this.y = this.y + this.spdY;
  }
  bounce() {
    //Bounce of xPos and change spdX
    if (this.x >= (width - (this.diameter / 2))) {
      this.spdX = this.spdX * -1;
      this.x = width - (this.diameter / 2);
    } else if (this.x <= (this.diameter / 2)) {
      this.spdX = this.spdX * -1;
      this.x = this.diameter / 2;
    }
    // Bounce of yPos and change spdy
    if (this.y >= (height - (this.diameter / 2))) {
      this.spdY = this.spdY * -1;
      this.y = height - (this.diameter / 2);
    } else if (this.y <= (this.diameter / 2)) {
      this.spdY = this.spdY * -1;
      this.y = this.diameter / 2;
    }
  }
}



/*********************/
//End of program
/*********************/