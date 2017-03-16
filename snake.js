function Snake(width, height){
//SNAKE VARIABLES
      this.width = width;
      this.height = height;
      this.scl = 15; // snake's scale, VERY IMPORTANT FOR MANAGING GRID
      this.ran = (round( random(1,(this.width/2)/this.scl) )*this.scl)-this.scl; //random start of snake
     this.x =  this.ran; //x coord
     this.y =  this.ran; //y coord
     this.xspeed = 0; //X DIRECTION
     this.yspeed = 0; //Y DIRECTION
     this.body = [];
     this.len = 0; //snake length




//UPDATE SNAKE POSITION IN CANVAS
this.update = function (){
   //traslate all the array element to left by one
      if(this.len === this.body.length){
            for(var i = 0; i < this.body.length-1; i++){
               this.body[i] = this.body[i+1];
            }
      }
      this.body[this.len - 1] = createVector(this.x, this.y);

      this.x += this.xspeed*this.scl;
      this.y += this.yspeed*this.scl;

      //this.x = constrain(this.x, 0, this.width - this.scl);
      //this.y = constrain(this.y, 0, this.height - this.scl);
   }

//MANAGE SNAKE DIRECTION
this.move = function(keyCode){
      switch (keyCode) {
         case UP_ARROW:
                  if(this.yspeed == 0){
                     this.yspeed = -1;
                     this.xspeed= 0;
                  }
                  break;
         case DOWN_ARROW:
                  if(this.yspeed == 0){
                     this.xspeed= 0;
                     this.yspeed = 1;
                  }
                  break;
         case LEFT_ARROW:
                  if(this.xspeed == 0){
                     this.xspeed= -1;
                     this.yspeed = 0;
                  }
                  break;
         case RIGHT_ARROW:
                  if(this.xspeed == 0){
                     this.xspeed= 1;
                     this.yspeed =0 ;
                  }
                  break;
         default:

      }

   }

/*check snake position in the canvas, if out of bound return true*/
/*this.isSnakeOut = function(x , y ){
      if(this.x > x || this.y > y || this.x  < 0 || this.y < 0){
         this.len = 0;
         this.body = [];
         return true;
      }else {
         return false;
      }

   }
*/
   //SHOW SNAKE ON THE CANVAS
this.show = function(){
      fill(255);
      //corpo
      for(var  i = 0; i < this.body.length; i++){
         if(this.body[i].x > this.width){
             rect(this.body[i].x - this.width ,this.body[i].y,this.scl,this.scl);
             this.body[i].x -= this.width;
         }else if(this.body[i].x < 0){
               rect(this.body[i].x + this.width,this.body[i].y,this.scl,this.scl);
               this.body[i].x += this.width;
         }else if(this.body[i].y < 0){
               rect(this.body[i].x,this.body[i].y + this.height,this.scl,this.scl);
               this.body[i].y += this.height;
         }else if(this.body[i].y > this.height){
               rect(this.body[i].x,this.body[i].y - this.height,this.scl,this.scl);
               this.body[i].y -= this.height;
         }else{
                rect(this.body[i].x,this.body[i].y,this.scl,this.scl);
         }
         //  rect(this.body[i].x,this.body[i].y,this.scl,this.scl);
      }

      //testa
      if(this.x >= this.width){
          rect(this.x - this.width ,this.y,this.scl,this.scl);
          this.x -= this.width;
      }else if(this.x < 0){
            rect(this.x + this.width,this.y,this.scl,this.scl);
            this.x += this.width;
      }else if(this.y < 0){
            rect(this.x,this.y + this.height,this.scl,this.scl);
            this.y += this.height;
      }else if(this.y >= this.height){
            rect(this.x,this.y - this.height,this.scl,this.scl);
            this.y -= this.height;
      }else{
             rect(this.x,this.y,this.scl,this.scl);
      }
      //rect(this.x, this.y, this.scl,this.scl);

   }

//MAKE SNAKE EATING
this.eat = function(foodP){
     if(this.x == foodP[0]  &&  this.y == foodP[1]){
        this.len++;
        console.log(this.len);
       return true;
     }
     return false;
   }
//CHEK IF IS DEAD
this.collision = function(){
   for(var i = 0; i < this.body.length; i++){
         if(dist(this.x, this.y, this.body[i].x, this.body[i].y) < this.scl){
            this.len = 0;
            this.body = [];
            return true;
         }
   }
   return false;
}
this.getSize = function(){
   return this.len;
}

}
