let score = JSON.parse((localStorage.getItem('score'))) || {
    wins: 0,
    losses: 0,
    ties: 0
}
 
updateScoreElement();
updateResultElement();
    
/* if (score === null){ Is the as same as below
if(!score){
    score ={
        wins: 0,
        losses: 0,
        ties: 0
    }
}All this code is as the same as || an object score */

function playGame(playerMove){
    const cmpMove = pickCmpMove();

    let result = '';

    if(playerMove === 'scissors'){
        if(cmpMove === 'rock'){
            result = 'You lose.';
        }else if(cmpMove === 'paper'){
            result = 'You win.';
        }else if(cmpMove === 'scissors'){
            result = 'You Tie.';
        }

    }else if(playerMove === 'paper'){
        if(cmpMove === 'rock'){
            result = 'You win.';
        }else if(cmpMove === 'paper'){
            result = 'Tie.';
        }else if(cmpMove === 'scissors'){
            result = 'You lose.';
        }
    }else if(playerMove === 'rock'){
        if(cmpMove === 'rock'){
            result = 'Tie.';
        }else if(cmpMove === 'paper'){
            result = 'You loose.';
        }else if(cmpMove === 'scissors'){
            result = 'You win.';
        }
    }

    if(result === 'You win.'){
        score.wins += 1;

    } else if(result === 'You lose.'){
        score.losses += 1;
        
    } else if(result === 'Tie.'){
        score.ties += 1;
        
    }
   
    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();
    
    document.querySelector('.js-result')
      .innerHTML = result;

      document.querySelector('.js-move')
      .innerHTML = `You 
<img src="images/${playerMove}-emoji.png" class="move-icon" alt="">
<img src="images/${cmpMove}-emoji.png" class="move-icon" alt="">
ComputerComputer`;

};

function updateScoreElement(){
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
};

function pickCmpMove(){
    const rndmNumber = Math.random();
    
    if(rndmNumber >= 0 && rndmNumber < 1/3){
        cmpMove = 'rock';
    }else if(rndmNumber >= 1/3 && rndmNumber < 2/3){
        cmpMove = 'paper';
    }else if(rndmNumber >= 2/3 && rndmNumber < 1){
        cmpMove = 'scissors';
    }
    return cmpMove;
}