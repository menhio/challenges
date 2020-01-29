/*
Question #3:
Write a program that accepts a comma-separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.  

Suppose the following input is supplied to the program:
without,hello,bag,world

Then, the output should be:
bag, hello, without, world
*/

function printcommaSeparated(str) {
  //let arr = str.split(',').sort() //uncomment this line to use the built-in sort function
  let arr = bubbleSort(str) //using custom bubble sort
  let csv_str = ''
  for(let i = 0; i < arr.length; i++) { //O(n)
    csv_str += i == arr.length - 1 ? arr[i] : arr[i] + ','
  }
  console.log(csv_str)
}

function bubbleSort(str) {
  const arr = str.split(',')
  for(let i = arr.length; i > 0; i--) {
    for(let j = 0; j < i; j++) {
      if(arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

printcommaSeparated('without,hello,bag,world')

