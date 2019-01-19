let yourHand = prompt('choose rock paper scissor');

let computer = game(Math.random() * 100 * 3);

function game(number){
  if (number < 100){
    return 'rock'
  }else if(number >= 100 && number <= 200){
    return 'scissor'
  }else{
    return 'paper'
  };
}

function match() {
  if(yourHand === computer){
    return 'tie';
  };
  
  if(yourHand === 'rock'){
    if (computer === 'paper'){
      return 'computer won'
    } else {
      return 'you won'
    }
  }
  if(yourHand === 'scissor'){
    if (computer === 'paper'){
      return 'you won'
    } else {
      return 'computer won'
    }
  }
  
  if(yourHand === 'paper'){
    if (computer === 'scissor'){
      return 'computer won'
    } else {
      return 'you won'
    }
  }
}

console.log(yourHand);
console.log(computer);
console.log(match());
