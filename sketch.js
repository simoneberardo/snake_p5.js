//GLOBAL VARIABLES
var snake ;
var food ;
var level = 8;
var scl = 15;
var walls = [];


//MAIN FUNCTIONS
function setup(){
  var width = 600;
  var height = 600;
   var playground = createCanvas(width, height);
   playground.parent('canvasArea');
   //create the first piece of snake and put it into snake array
   snake = new Snake(width, height);

   //console.log(this.ran+" "+this.ran);
   frameRate(8);
   //create new instance of Food
   this.food = new Food(width, height);
   buildScenario();
    // console.log(this.walls.length);

}

function keyPressed(){
       //moving function
       if(keyCode == 32){
          this.restart();
       }
      this.snake.move(keyCode);
}

function restart(){
   window.location.reload();
}

function draw(){
   background(80, 80, 80);
   window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
   showScenario();
   this.food.show();
//check if is dead

  if(this.snake.collision() || this.wallCollision()){
      noLoop();
      console.log("HAI PERSO!");
   }

   //check if the game is on going
   if(!wallCollision()){
     //update
      this.snake.update();
   //  and show snake
      this.snake.show();
    }
   //make the snake eat the food and create a new piece of snake
      if(this.snake.eat( this.food.foodPos() )){
      //create a new random piec of food
      //
      var flag=true;
      this.food = new Food(this.width, this.height);
      while(flag){
        flag=false;
        for(var i = 0; i < this.snake.body.length; i++){
            if(dist(this.food.x, this.food.y, this.snake.body[i].x, this.snake.body[i].y) < this.scl)
            {
               this.food = new Food(this.width, this.height);
               flag=true;
               break;
            }
          }
    }
      //
     this.food.show();
     //level up
      levelUp();
  }
}

function buildScenario(){
   var halfH = (this.width/2);
   var halfV = (this.height/2);
   var count1 = 0;
   var count2 = 0;
      for(var i = 0; i < this.width; i+=this.scl){
         /*console.log(i != (this.halfH - 2*this.scl));
         console.log(i != this.halfH - this.scl);*/
         console.log(i);
         if(i != (halfH - 2*this.scl) && i != (halfH - this.scl) && i != this.width/2 && i != (halfH + this.scl) && i != (halfH + 2*this.scl)  ){
            this.walls.push(new Wall(i,0));
            this.walls.push(new Wall(i, this.height - this.scl));
            count1++;
         }
      }
      for(var i = 0; i < this.height; i+=this.scl){
            if(i != (halfV - 2*this.scl) && i != (halfV - this.scl) && i != this.height/2 && i != (halfV + this.scl) && i != (halfV + 2*this.scl)  ){
               this.walls.push(new Wall(0, i));
               this.walls.push(new Wall(this.width - this.scl, i));
               count2++;
            }
      }
      console.log(halfH);

      console.log("COUNT 1: "+count1);
      console.log("COUNT 2: "+count2);
}

function showScenario(){
   fill(255,(round(random(0,170))),0);
   for(var i = 0; i < this.walls.length; i++){
      rect(this.walls[i].x,this.walls[i].y,this.scl,this.scl);
         //console.log("x : "+this.walls[i].x+" y: "+this.walls[i].y);
   }
}

function levelUp(){
   //console.log("SIZE "+this.snake.getSize());
   if(this.snake.getSize() % 5 == 0){
      this.level++;
   }
   if(this.level<=25){
    frameRate(this.level);
  }
}

function wallCollision(){
   for(var i = 0; i < this.walls.length; i++){
      if(this.snake.x == this.walls[i].x && this.snake.y == this.walls[i].y){
         return true;
      }
   }
}
