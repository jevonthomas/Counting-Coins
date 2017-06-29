// Write a program that will convert a dollar amount to the number
// of coins that make up the amount. Use the common American coins of
// quarters, dimes, nickels, and pennies.

/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

//Target the element in the DOM for which I will capture user input from
var input = document.getElementById("dollarInput");

//Add an event listener to the input field that listens for a button to be clicked
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  //Makes the event listener perform a function when the enter key is pressed
  if (event.keyCode == 13) {
    //store the user input into a variable to be used as an argument in the coincounter function
    input = input.value
    function coinCounter (input) {
      // Initialize a JavaScript object to hold the coins
      var coinPurse = {};

      //adds each coin to the object as properties and sets them equal to 0, to be used as counters
      coinPurse.quarters = 0;
      coinPurse.dimes = 0;
      coinPurse.nickels = 0;
      coinPurse.pennies = 0;

      //The following calculations are used start from allocating the largest coin to the dollar value, and works its way down to the smallest coin
      coinPurse.quarters = Math.floor(input / .25);
      remainder = (input % .25);
      coinPurse.dimes = Math.floor(remainder / .10);
      remainder = remainder % .10;
      coinPurse.nickels = Math.floor(remainder / .05);
      remainder = remainder % .05;
      coinPurse.pennies = Math.floor(remainder / .01);

      //returns the object with each property and their final value
      return coinPurse;
    }
  var coins = coinCounter(input)
  console.log(coins);

  }
})

