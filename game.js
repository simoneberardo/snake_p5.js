function Game(){
   this.inGame = true;


   this.setStateGame = function(state){
         this.inGame = state;
   }

   this.score = function(level,t1,t0){
     //provvisoria
     return 10*(level-7);
   }

   this.ranking = function(name,finalScore,ranking_score, ranking_user){

     for(var i = 0; i < ranking_score.length; i++){
            console.log("CIAOOOO");
       if(finalScore >= ranking_score[i]){
         ranking_score[i] = finalScore;
         ranking_user[i] = name;

       }
     }
   }






}
