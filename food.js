function Food(){
      this.width = 600;
      this.height = 600;
      this.scl = 15;
      this.x = (round(random(1,(this.width - (2*this.scl))/this.scl))*this.scl);
      this.y = (round(random(1,(this.height - (2*this.scl))/this.scl))*this.scl);




      this.foodPos = function(){
         var arrPos = [this.x, this.y];
         return arrPos;
      }

      this.show = function(){
         fill(255,0,100);
         rect(this.x,this.y,this.scl,this.scl);
         //console.log(this.x+ " "+this.y);
      }

}
