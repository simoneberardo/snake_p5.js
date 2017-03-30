function Snake(width, height){
//SNAKE VARIABLES

   this.width = width;
   this.height = height;
   this.scl = 15; // snake's scale, VERY IMPORTANT FOR MANAGING GRID
   this.ran = (round( random(1,(this.width - (2*this.scl))/this.scl) )*this.scl); //random start of snake
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
}

//MANAGE SNAKE DIRECTION
this.move = function(keyCode){
      switch (keyCode) {
         case UP_ARROW:
         case 87:
                  if(this.yspeed == 0){
                     this.yspeed = -1;
                     this.xspeed= 0;
                  }
                  break;
         case DOWN_ARROW:
         case 83:
                  if(this.yspeed == 0){
                     this.xspeed= 0;
                     this.yspeed = 1;
                  }
                  break;
         case LEFT_ARROW:
         case 65:
                  if(this.xspeed == 0){
                     this.xspeed= -1;
                     this.yspeed = 0;
                  }
                  break;
         case RIGHT_ARROW:
         case 68:
                  if(this.xspeed == 0){
                     this.xspeed= 1;
                     this.yspeed =0 ;
                  }
                  break;
         default:
      }
}

   //SHOW SNAKE ON THE CANVAS
this.show = function(){
      fill(round(random(170,255)),round(random(180,255)),round(random(0,20)));
      //coda
      if(this.body.length>0){
        if(this.body[0].x > this.width){
             rect(this.body[0].x - this.width +1 ,this.body[0].y +1,this.scl-2,this.scl-2,3);
             this.body[0].x -= this.width;
         }else if(this.body[0].x < 0){
               rect(this.body[0].x +1 + this.width,this.body[0].y +1,this.scl-2,this.scl-2,3);
               this.body[0].x += this.width;
         }else if(this.body[0].y < 0){
               rect(this.body[0].x +1,this.body[0].y + this.height +1,this.scl-2,this.scl-2,3);
               this.body[0].y += this.height;
         }else if(this.body[0].y > this.height){
               rect(this.body[0].x +1, this.body[0].y - this.height +1,this.scl-2,this.scl-2,3);
               this.body[0].y -= this.height;
         }else{
                rect(this.body[0].x +1,this.body[0].y +1,this.scl-2,this.scl-2,3);
         }
      }
      //corpo
      for(var  i = 1; i < this.body.length; i++){
        if(i%2==0){
          fill(10);
        }else{
          fill(230,70,0);
        }
        if(this.body[i].x > this.width){
             rect(this.body[i].x - this.width ,this.body[i].y,this.scl,this.scl,3);
             this.body[i].x -= this.width;
         }else if(this.body[i].x < 0){
               rect(this.body[i].x + this.width,this.body[i].y,this.scl,this.scl,3);
               this.body[i].x += this.width;
         }else if(this.body[i].y < 0){
               rect(this.body[i].x,this.body[i].y + this.height,this.scl,this.scl,3);
               this.body[i].y += this.height;
         }else if(this.body[i].y > this.height){
               rect(this.body[i].x, this.body[i].y - this.height,this.scl,this.scl,3);
               this.body[i].y -= this.height;
         }else{
                rect(this.body[i].x,this.body[i].y,this.scl,this.scl,3);
         }
      }
      fill(10);
      //testa
      if(this.x >= this.width){
          rect(this.x - this.width -1 ,this.y-1,this.scl+2,this.scl+4,5);
          this.x -= this.width;
      }else if(this.x < 0){
            rect(this.x + this.width -1,this.y-1,this.scl+2,this.scl+4,5);
            this.x += this.width;
      }else if(this.y < 0){
            rect(this.x-1,this.y + this.height -1,this.scl+2,this.scl+4,5);
            this.y += this.height;
      }else if(this.y >= this.height){
            rect(this.x-1,this.y - this.height -1,this.scl+2,this.scl+4,5);
            this.y -= this.height;
      }else{
             rect(this.x-2,this.y-2,this.scl+4,this.scl+4,5);
      }
   }

//MAKE SNAKE EATING
this.eat = function(foodP){
     if(this.x == foodP[0]  &&  this.y == foodP[1]){
        this.len++;
      //  console.log(this.len);
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
