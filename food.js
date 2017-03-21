function Food(width,height){
      this.width = width;
      this.height = height;
      this.scl = 15;
      this.x = (round(random(1,(this.width - (2*this.scl))/this.scl))*this.scl);
      this.y = (round(random(1,(this.height - (2*this.scl))/this.scl))*this.scl);




      this.foodPos = function(){
         var arrPos = [this.x, this.y];
         return arrPos;
      }

      this.show = function(){
         fill(178,0,0);
         rect(this.x,this.y,this.scl,this.scl,10);
         //console.log(this.x+ " "+this.y);
      }

}
