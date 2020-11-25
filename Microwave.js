/*
* The Microwave program implements an application that determines the amount 
* of time required to cook various amounts of different foods
*
* @author  Douglass Jeffrey
* @version 1.0
* @since   2020-11-24
* Class Microwave.
*/


// Imports readline to allow for user input
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

try {

var cooktime;


  // Food type Input
  rl.question('Enter the number of the food item you wish to heat '
              + 'up 1 For sub, 2 for pizza, or 3 for soup. ', ( foodnumber) => {

  // Food Number Input
  rl.question('Enter the number of foods items that need to be heated up'
              + ' (1, 2, or 3): ', (foodamount) => {

      // Process Determines cooktime from foodtype and amount
      if (foodnumber == 1) {
        cooktime = 60;
      } else if (foodnumber == 2) {
        cooktime = 45;
      } else if (foodnumber == 3) {
        cooktime = 105;
      } else {
        console.log('Invalid foodtype selected');
        return;
      }

      if ((foodamount <= 3 && foodamount >= 1)) {
        cooktime = cooktime + 0.5 * (foodamount - 1) * cooktime;
      } else {
        console.log('Invalid quantity selected');
        return;
      }

    // outputs cooktime in seconds
    console.log('cooktime in seconds: ' + cooktime);

  rl.close();
});
});

} catch(err) {
  console.log('Invalid input. Please try again');
}
