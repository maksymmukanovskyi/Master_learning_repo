        let scores, roundscore, activePlayer,gamePlaying,previousDiceRoll, winningScore,checkInput;
init();


function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
    roundscore = 0;
    document.getElementById('current-0').textContent = '0'; 
    document.getElementById('current-1').textContent = '0'; 
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice_1').style.display = 'none';

}




document.querySelector('.btn-roll').addEventListener('click', ()=> {
    if(gamePlaying && winningScore !== 0){
    let dice = Math.floor(Math.random() * 6) + 1;
    let dice_1 = Math.floor(Math.random() * 6) + 1;
    let totalDice = dice + dice_1;



    let diceDom = document.querySelector('.dice');
    let diceDom_1 = document.querySelector('.dice_1');
    diceDom.style.display = 'block';
    diceDom_1.style.display = 'block';

    diceDom.src = `img/dice-${dice}.png`;
    diceDom_1.src = `img/dice-${dice_1}.png`;



    if(previousDiceRoll === 6 && totalDice === previousDiceRoll){
        console.log('Previous score = 6 and current = 6, your scores will be 0')
        scores[activePlayer] = 0
        document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];
        nextPlayer();

       


    }else if(dice !== 1 || dice_1 !== 1){
        roundscore += totalDice;
        document.querySelector(`#current-${activePlayer}`).textContent = roundscore;
        previousDiceRoll = totalDice;
        
    }
    else{
        nextPlayer();
        console.log(`One of the dice = 1, players change turn!`);

    }
    }
});





document.querySelector('.btn-hold').addEventListener('click', () => {
    if(gamePlaying){
        scores[activePlayer] += roundscore; 
    document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];
    if(winningScore == 0){
        alert('Define number first');

        

    }else if(scores[activePlayer] >= winningScore){
        console.log(winningScore);
        document.getElementById(`name-${activePlayer}`).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice_1').style.display = 'none';

        document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
        document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
        gamePlaying = false;
    }else{
        nextPlayer();
    } 
    }
    
})



document.querySelector('.btn-new').addEventListener('click', init)
function init(){
scores = [0, 0];
roundscore = 0;
activePlayer = 0;
gamePlaying = true;
winningScore = 0;
document.querySelector('.dice').style.display = 'none';
document.querySelector('.dice_1').style.display = 'none';

document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById(`name-0`).textContent = 'Katya';
document.getElementById(`name-1`).textContent = 'Maksym';
document.querySelector(`.player-0-panel`).classList.remove('winner');
document.querySelector(`.player-1-panel`).classList.remove('winner');
document.querySelector(`.player-0-panel`).classList.remove('active');
document.querySelector(`.player-1-panel`).classList.remove('active');
document.querySelector(`.player-0-panel`).classList.add('active');
document.querySelector('.scoreForm').style.display ='block';
document.querySelector('.scoreMessage').style.display = 'none';
document.querySelector('.link').style.display = 'block';

}

let myForm = document.querySelector('.scoreForm');
myForm.addEventListener('submit', function(e){
    e.preventDefault();
    checkInput = document.querySelector('#scoreValue').value;
    if(!isNaN(checkInput) && checkInput > 0){
        winningScore = checkInput;
        this.reset();
        let message = document.querySelector('.scoreMessage');
        message.querySelector('.message').textContent = `You set your winning score: ${winningScore}`;
        message.style.display = 'block';
        myForm.style.display = 'none';
        document.querySelector('.link').style.display = 'none';
    }else{
        this.reset();
        alert('Type number from 1 to 10000 please')}
    
})

