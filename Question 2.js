/*
Question #2:
Write a program that calculates and prints the value according to the given formula:
Q = Square root of [(2 * C * D)/H]

The following are the fixed values of C and H:
C is 50. H is 30.

D is the variable whose values should be input to your program in a comma-separated sequence.

Example
Let us assume the following comma-separated input sequence is given to the program:  100,150,180

The output of the program should be: 18,22,24
*/

function squareRoot(...arr) {
  const c = 50
  const h = 30
  for(let i = 0; i < arr.length; i++) { //O(n)
    if(Number.isInteger(arr[i])) {
      console.log(Math.round(Math.sqrt((2 * c * arr[i]) / h)))
    }
    else {
      console.log('Only integers are allowed')
    }
  }
}

//Time: O(n)
//Space: O(1)
squareRoot(100, 150, 180)
