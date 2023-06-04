function rpsGame(yourChoice){
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    // console.log(humanChoice);
    botChoice = botInput(random());
    let results = decideWinner(humanChoice, botChoice);
    let message = finalMessage(results);
    rpsFrontEnd(yourChoice.id, botChoice, message);
    end();
}

function random(){
    return Math.floor(Math.random()*3);
}

function botInput(number){
    return ['rock', 'paper', 'scissor'][number];
}

function decideWinner(yourChoice, compChoice){
    let rpsDatabase = {
        'rock': {'scissor': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissor': 0},
        'scissor': {'paper': 1, 'scissor': 0.5, 'rock': 0}
    };

    let yourScore = rpsDatabase[yourChoice][compChoice];
    let compScore = rpsDatabase[compChoice][yourChoice];

    return [yourScore, compScore];
}

function finalMessage([yourScore, compScore]){
    if(yourScore == 0){
        return {'message': 'You Lost!', 'color': 'pink'};
    }
    else if(yourScore == 0.5){
        return {'message': 'You Tied!', 'color': 'yellow'};
    }
    else{
        return {'message': 'You Won!', 'color': 'aqua'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    let imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    };

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' id='" + humanImageChoice + "'>";
    document.getElementById('game').appendChild(humanDiv);
    
    messDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px;'>" + finalMessage['message'] + "</h1>";
    document.getElementById('game').appendChild(messDiv);

    botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "' id='" + botImageChoice + "'>";
    document.getElementById('game').appendChild(botDiv);
}

function end(){
    resetToDefault();
    let h1 = document.createElement('h1');
    h1.innerHTML = "Thanks for playing this game, Hope you enjoyed!!";
    h1.setAttribute('id', 'endOfGame');
    h1.style.color = "aqua";
    h1.style.width = "96%";
    h1.style.textAlign = "center";
    h1.style.padding = "10px";
    document.body.appendChild(h1);
}

function resetToDefault(){
    document.getElementById("endOfGame").remove();
}