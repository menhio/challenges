/*
Question #1:
Write a program which will find all such numbers which are divisible by 7, but are not a multiple of 5, and are between 2000 and 3200 (both included).  The numbers obtained should be printed in a comma-separated sequence on a single line.
*/

function findNumber(min, max) {
  for(let i = min; i <= max; i++) { //O(n)
    if(i % 7 === 0 && i % 5 !== 0) {
      console.log(i)
    }
  }
}

//Time: O(n)
//Space: O(1)
findNumber(2000, 3200)

