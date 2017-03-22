function Game(){
   this.inGame = true;


   this.setStateGame = function(state){
         this.inGame = state;
   }

   this.score = function(level){
     return 10*(level-7);
   }
}
