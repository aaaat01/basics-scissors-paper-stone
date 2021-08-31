// user inputs scissors, paper, stone
// Program returns "You Win!" with the following outcomes: scissors beats paper, paper beats stone, stone beats scissors
// Program returns "You Lose!" with the following outcomes: paper loses to scissors, stone loses to paper, scissors loses to stone
//Program returns "It's a draw!" with the following outcomes: paper with paper, stone with stone, scissors with scissors
//Any other input than scissors, paper, stone to return
var main = function (input) {
  if (input == "stone" || input == "scissors" || input == "paper") {
    var myOutputValue = "";
    console.log(myOutputValue);
    var WLD = playSPS(input);
    console.log(WLD);
    myOutputValue = WLD;
    return myOutputValue;
  } else {
    myOutputValue =
      "Sorry, your input was not one of the three input options. Please try again!";
    console.log(myOutputValue);
  }
};

//Game logic
//If input is equals to ComSPS, program will return "It's a draw!"
var playSPS = function (input) {
  var myOutputValue = "";
  var ComSPS = ComAns();
  console.log(input);
  console.log(ComSPS);
  if (input == ComSPS) {
    console.log("DRAW");
    myOutputValue = "It's a draw!";
  } else {
    console.log("NOT DRAW");
    //If input is not equal to ComSPS, program will return "You lose!" or "You win!"
    if (
      (input == "scissors" && ComSPS == "stone") ||
      (input == "paper" && ComSPS == "scissors") ||
      (input == "stone" && ComSPS == "paper")
    )
      myOutputValue = "You lose!";
    if (
      (input == "scissors" && ComSPS == "paper") ||
      (input == "paper" && ComSPS == "stone") ||
      (input == "stone" && ComSPS == "scissors")
    )
      myOutputValue = "You win!";
  }

  return myOutputValue;
};

//Computer's Brain

//Assign scissors, paper, stone to 3 numbers

var ComAns = function () {
  var ComAns1 = "scissors";
  var ComAns2 = "paper";
  var ComAns3 = "stone";
  var randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);

  if (randomNumber == 0) {
    console.log("Scissors yay");
    console.log(ComAns1);
    return ComAns1;
  }
  if (randomNumber == 1) {
    console.log("Paper yay");
    console.log(ComAns2);
    return ComAns2;
  }
  if (randomNumber == 2) {
    console.log("Stone yay");
    console.log(ComAns3);
    return ComAns3;
  }
};
