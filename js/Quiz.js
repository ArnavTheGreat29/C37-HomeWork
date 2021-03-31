class Quiz{
    constructor(){
       
    }

    
    getGameState(){

        database.ref('gameState').on("value",(data)=>{
            gameState = data.val()

        })
    }
    updateGameState(gameStateValue){
        database.ref('/').update({gameState: gameStateValue })
    }
    async start(){
       if(gameState === 0){
        contestant = new Contestant()
        var contestantCountRef = await database.ref('contestantCount').once("value")

       if(contestantCountRef.exists()){
           contestantCount = contestantCountRef.val()
         
          }
        contestant.getContestantCount()
        question = new Question()
        question.display()
       }
    }
    play(){
       question.hide()
       background("yellow")
       text("result of the quiz",300,100)
       Contestant.readContestantInfo()
       
       if(allContestants !== null ){
         console.log("hi")

           var AnsPos = 250;
           

           for(var plr in allContestants){
     
            var rightAns = "C";
            if(rightAns == allContestants[plr].Answer){
                fill ("green")
            }
            else{
                fill ("red")
            }
            AnsPos+=20
            text(allContestants[plr].Name + " : " + allContestants[plr].Answer ,240 , AnsPos)
          
            }
       }
     }

    
    
}