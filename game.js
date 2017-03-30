function Game(){
   this.inGame = true;


   this.setStateGame = function(state){
         this.inGame = state;
   }

   this.score = function(level,t1,t0){
     //provvisoria
     return 10*(level-7);
   }
}
