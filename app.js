let scoreStr = localStorage.getItem('score');
let score;
resetScore(scoreStr);
function resetScore(scoreStr){
   score =scoreStr ? JSON.parse(scoreStr) : {  
    win: 0,
    lost : 0,
    tie :0,};
  
    score.displayScore = function(){
      return `won:${score.win},lost:${score.lost},tie:${score.tie}`;
    }
}

function generateComputerChoice() {
  let randamNum = Math.floor(Math.random()*3);

if(randamNum > 0 && randamNum <= 1){
  return 'Bat';
}else if(randamNum > 1 && randamNum <=2){
  return 'Ball';
}else{
  return 'Stump';
}
}

function getResult(userMove,computerMove){
  if(userMove === 'Ball'){
    if(computerMove === 'Ball'){
      score.tie++;
      return 'it is a tie';
   } else if(computerMove === 'Bat'){
    score.lost++;
     return 'computer won';
   }else{
    score.win++;
     return 'user won' ;
   }
  }else if(userMove === 'Bat'){
    if(computerMove === 'Ball'){
      score.win++;
      return 'user won';
   } else if(computerMove === 'Bat'){
    score.tie++;
     return 'it is a tie';
   }else{
    score.lost++;
     return 'computer won' ;
   }
  }else{
    if(computerMove === 'Stump'){
      score.tie++;
      return 'it is a tie';
   } else if(computerMove === 'Bat'){
    score.lost++;
     return 'computer won';
   }else{
    score.win++;
     return 'user won' ;
   }
  }
}

function showResult(userMove,computerMove,result){
  localStorage.setItem('score',JSON.stringify(score));
  document.querySelector('#user-move').innerText =
  userMove ?`you have choosen ${userMove}` :'';

  document.querySelector('#computer-move').innerText =
  computerMove ?`Computer choice is ${computerMove}` :'';

  document.querySelector('#result').innerText = result || '';
  document.querySelector('#score').innerText = score.displayScore();
}