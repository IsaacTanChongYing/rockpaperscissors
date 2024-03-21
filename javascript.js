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

console.log(getComputerChoice())

function playRound(playerSelection, computerSelection)
{
    //your code here!
    if(computerSelection === 'Rock' && playerSelection === 'Paper')
    {
        return 'You Win! Paper beats Rock'
    }
    else if(computerSelection === 'Rock' && playerSelection === 'Rock')
    {
        return 'Tie!'
    }
    else if(computerSelection === 'Rock' && playerSelection === 'Scissors')
    {
        return 'You Lose! Rock beats Scissors'
    }
    else if(computerSelection === 'Paper' && playerSelection === 'Paper')
    {
        return 'Tie!'
    }
    else if(computerSelection === 'Paper' && playerSelection === 'Rock')
    {
        return 'You Lose! Paper beats Rock'
    }
    else if(computerSelection === 'Paper' && playerSelection === 'Scissors')
    {
        return 'You Win! Scissors beats Paper'
    }
    else if(computerSelection === 'Scissors' && playerSelection === 'Paper')
    {
        return 'You Lose! Scissors beats Paper'
    }
    else if(computerSelection === 'Scissors' && playerSelection === 'Rock')
    {
        return 'You Win! Rock beats Scissors'
    }
    else if(computerSelection === 'Scissors' && playerSelection === 'Scissors')
    {
        return 'Tie!'
    }
}


const playerSelection = prompt('Rock, Paper, or Scissors');
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))
console.log(computerSelection)