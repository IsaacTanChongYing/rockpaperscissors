let playerWins = 0
let computerWins = 0

function getComputerChoice()
{
    //returns a random int from 0 - 2
    let x = Math.floor(Math.random()*3)

    if(x == 0)
    {
        return 'Rock'
    }
    else if(x == 1)
    {
        return 'Paper'
    }
    else
    {
        return 'Scissors'
    }
}

function playRound(playerSelection, computerSelection)
{
    //your code here!
    if(computerSelection === 'Rock' && playerSelection === 'PAPER')
    {
        playerWins++
        return 'You Win! Paper beats Rock'
    }
    else if(computerSelection === 'Rock' && playerSelection === 'ROCK')
    {
        return 'Tie!'
    }
    else if(computerSelection === 'Rock' && playerSelection === 'SCISSORS')
    {
        computerWins++
        return 'You Lose! Rock beats Scissors'
    }
    else if(computerSelection === 'Paper' && playerSelection === 'PAPER')
    {
        return 'Tie!'
    }
    else if(computerSelection === 'Paper' && playerSelection === 'ROCK')
    {
        computerWins++
        return 'You Lose! Paper beats Rock'
    }
    else if(computerSelection === 'Paper' && playerSelection === 'SCISSORS')
    {
        playerWins++
        return 'You Win! Scissors beats Paper'
    }
    else if(computerSelection === 'Scissors' && playerSelection === 'PAPER')
    {
        computerWins++
        return 'You Lose! Scissors beats Paper'
    }
    else if(computerSelection === 'Scissors' && playerSelection === 'ROCK')
    {
        playerWins++
        return 'You Win! Rock beats Scissors'
    }
    else if(computerSelection === 'Scissors' && playerSelection === 'SCISSORS')
    {
        return 'Tie!'
    }
}

function playGame()
{
    //prompt user for input and force these inputs to upperCase
    const playerSelection = prompt('Rock, Paper, or Scissors').toUpperCase();
    const computerSelection = getComputerChoice();
    console.log('Computer Choice: ',computerSelection)   
    console.log(playRound(playerSelection, computerSelection))
}

//5 matches
for(let i = 0; i < 5; i ++)
{
    playGame()
}

if(playerWins > computerWins)
{
    console.log('Player Wins the Game!')
}
else if(computerWins > playerWins)
{
    console.log('Computer Wins the Game!')
}
else
{
    console.log('Its a Tie!')
}