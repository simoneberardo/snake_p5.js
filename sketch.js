//GLOBAL VARIABLES
var snake ;
var food ;
var width = 600;
var height = 600;


//MAIN FUNCTIONS
function setup(){
   createCanvas(600,600);
   //create the first piece of snake and put it into snake array
   snake = new Snake(this.width, this.height);
   //console.log(this.ran+" "+this.ran);
   frameRate(10);
   //create new instance of Food
   this.food = new Food();
}


function keyPressed(){
       //moving function
      this.snake.move(keyCode);
}

function draw(){
   background(0);
   this.food.show();
   //check if snake is in bounds
   if(this.snake.isSnakeOut(this.width, this.height)){
      noLoop();
      console.log("HAI PERSO!");
   }
//check if is dead
   if(this.snake.collision()){
      noLoop();
      console.log("HAI PERSO!");
   }
   //upedate
      this.snake.update();
   //  and show snake
      this.snake.show();

   //make the snake eat the food and create a new piece of snake
   if(this.snake.eat(this.food.foodPos())){
      //create a new random piec of food
     this.food = new Food();
     this.food.show();
  }


}
