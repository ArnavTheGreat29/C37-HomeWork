var canvas;
var database;
var gameState, contestantCount, contestantInfo;
var question, contestant, quiz;
var allContestants;

gameState = 0;
contestantCount = 0;

function setup(){

  canvas = createCanvas(850,400);
  database = firebase.database()
  quiz =  new Quiz()
  
  quiz.getGameState()
  quiz.start()

}

function draw(){
  background("pink");

  if(contestantCount === 4 && gameState === 0){
    quiz.updateGameState(1)

}

if(gameState ==1){
  quiz.play()

}
}
