//GLOBAL VARIABLES
var snake ;
var food ;
var bg;
var level = 8;
var scl = 15;
var walls = [];
var score = 0;
var game;
var lavender;
var t0;
var t1;

//MAIN FUNCTIONS
function preload(){
  lavender = loadSound('media/LT.mp3');
}

function setup(){
  this.game = new Game();
  this.lavender.play();
  var width = 600;
  var height = 600;
  bg = loadImage("media/grass.jpg");
   var playground = createCanvas(width, height);
   playground.parent('canvasArea');
   //create the first piece of snake and put it into snake array
   snake = new Snake(width, height);
//initial frame rate
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
//background functions
background(178,198,105);
background(bg);
   //prevent arraw key events --> don't move the web page
   window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
   }, false);

//show builded scenario
   showScenario();
//show new piece of food
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
      //create a new random piece of food, check if the new piece is spawning into the snake's tail .
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
      this.t1=performance.now();
     this.food.show();
     //display score
     if(this.snake.body.length==0)
     {
       this.score+=10;
     }
     else{
       this.score += this.game.score(this.level,this.t1,this.t0);
     }
     var sa = document.getElementById("scoreArea");
     sa.innerHTML = "YOUR SCORE:<br/><span class='bigger'>"+this.score+"</span>";
     this.t0=this.t1;
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
}

function showScenario(){
   fill(10,80,0);
   for(var i = 0; i < this.walls.length; i++){
      rect(this.walls[i].x,this.walls[i].y,this.scl,this.scl);
   }
}

function levelUp(){
   if(this.snake.getSize() % 5 == 0){
      this.level++;
   }
   if(this.level<=25){
    frameRate(this.level);
  }
  //display snake length
  var la = document.getElementById("lengthArea");
  var lengthDisplay = this.snake.getSize()+1;
  la.innerHTML = "SNAKE LENGTH:<br/><span class='bigger'>"+lengthDisplay+"</span>";
}

function wallCollision(){
   for(var i = 0; i < this.walls.length; i++){
      if(this.snake.x == this.walls[i].x && this.snake.y == this.walls[i].y){
         return true;
      }
   }
}
