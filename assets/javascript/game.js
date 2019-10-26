//create an array of words
const words = ['chiefs', 'patriots', 'eagles', 'colts', 'ravens', 'cowboys', 'bears', 'packers', 'falcons', 'vikings'];
//choose word randomly

var randNum = Math.floor(Math.random() * words.length);
var choosenWord = words[randNum];

//Global variable
var numWins = 0;
var guessRemain = 12;
var blanksToFill = [];
var incorrectGuess = [];

var docUnderScore = document.getElementById('underScore');
var docWrongGuess = document.getElementById('wrongGuess');
var docWins = document.getElementById('wins');
var docGuessRemain = document.getElementById('guessRemaining');

console.log(choosenWord);
//create underscores based on length
var generateRandomWord = function() {
    blanksToFill = [];
    incorrectGuess = [];
    guessRemain = 12;
    for(var i =0; i< choosenWord.length; i++)
    {
        blanksToFill.push('_');
    }
    docUnderScore.textContent = blanksToFill.join(' ');
    docWrongGuess.textContent = incorrectGuess;
    docGuessRemain.textContent = guessRemain;
}
generateRandomWord();
docWins.textContent = numWins;

//Get users guess

document.onkeyup = function (event) {
    var userInput = event.key.toLowerCase();
    //if choosen letter is right
    if(choosenWord.indexOf(userInput) > -1){   
        
        //replace underscore with right letter
        for(var i =0; i< choosenWord.length; i++)
        {
            if(choosenWord.substr(i,1) == userInput)
            {
                blanksToFill[i] = userInput;
                if(i == 0)
                    blanksToFill[i] = userInput.toUpperCase();
            }
        }
        
        docUnderScore.textContent = blanksToFill.join(' ');
    // check if user word matches random word, reset the random word and update wins counter
        if(blanksToFill.join('').toLowerCase() == choosenWord){
            numWins++;
            docWins.textContent = numWins;
            randNum = Math.floor(Math.random() * words.length);
            choosenWord = words[randNum];
            generateRandomWord();
        }
    }
    else
    {   
        guessRemain--;
        incorrectGuess.push(userInput);
        docWrongGuess.textContent = incorrectGuess;

        if(guessRemain == 0)
            generateRandomWord();
        else     
            docGuessRemain.textContent = guessRemain; 
    }
};

