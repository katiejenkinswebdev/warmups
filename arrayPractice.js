'use strict';
// ---------------
// Create arrays
// ---------------

// Define a function named weekdays
//
// Return an array of strings that represent days of the week

//no semi colons after function declarations! (no var) //
function weekdays() {
  return ["Mon", "Tues", "Weds", "Thurs", "Fri"];
}

function weekdays() {
  return ["Mon", "Tues", "Weds", "Thurs", "Fri"];
}

// console.log(weekdays());

// ---------------
// Store and access values by index in arrays
// ---------------

// Define a function named simpleAccess that takes two arguments:
//    - a number reprenting an index in the array
//    - an array
// Return value of the array at the index specified by _number_
//
// Example: If you are given ['a', 'b', 'c'], 1 your function should return "b"

// function simpleAccess(array, index){
//   console.log(array.indexOf(index));
// }
//
// console.log(simpleAccess(['a', 'b', 'c'], 1));

function simpleAccess(array, index){
  // find value of index
  console.log(array[index]);
  return array[index];
}

// console.log(simpleAccess(['a', 'b', 'c'], 1));

// Define a function named replaceValue that takes 3 arguments:
//    - an array
//    - a number reprenting an index in the array
//    - a string
// Change the value of the array at the specified index to the string
//
// Example: replaceValue(['a', 'b', 'c'], 1, 'dog') would change the input array ['a', 'dog', 'c']

//make sure the array is changing - must store array as variable, then console.log array after --> proving pass by reference

// function replaceValue (array, string, index){
//   console.log(myArray);
//   myArray[index] = string;
//   console.log(myArray);
// }
//
// var myArray = ["a" ,"b", "c"];
//
// replaceValue(myArray, "dog", 1);
// console.log(myArray);

var array = ["a" ,"b", "c"];

function replaceValue (array, string, index){
  // console.log(array[index]);
  array[index] = string;
}

replaceValue(array, "boy", 1);
// console.log(array);

//swap values at index1 and index2

function swap(arr, index1, index2){
  console.log(arr);
  var temp;
  temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  console.log(arr);
}

console.log(swap([0,1,2,3,4],2,4));


//swapValues takes array and 2 values - swap these 2

function swapValues(arr,val1,val2){
  var index1 = arr.indexOf(val1);
  var index2 = arr.indexOf(val2);
  var temp;

  if(index1 === -1 || index2 === -1){
    return "one of the numbers does not exist in the array"
  }

  temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  //can also do this without temp!
  //arr[index1] = val2;
  //arr[index2] = val1;

  console.log(arr);
  return arr;
}
//test this adding in values
swapValues([])

//

// Write an Object literal
// Write an Array literal












// Define a function named swap that takes 3 arguments:
//  - an array
//  - index1 (a number)
//  - index2 (a number)
//
// Swap the values at index1 and index2
//
// Example: swap(['a', 'b', 'c', 'd'], 0, 2) would change the input array to ['c', 'b', 'a', 'd']
//
// NOTE: you'll need a temporary variable to accomplish this





// ------------
// Find the position of an element using .indexOf()
// ------------

// Define a function named contains that takes 3 arguments:
//  - an array
//  - a value
//
// Swap the position of the two values in the array
//
// Example: contains(['a', 'b', 'c', 'd'], 'a') would return true
// Example: contains(['a', 'b', 'c', 'd'], 'z') would return false



// Define a function named swapValues that takes 3 arguments:
//  - an array
//  - value1 (an item from the array)
//  - value2 (another item from the array)
//
// Swap the position of the two values in the array
//
// Example: swapValues(['a', 'b', 'c', 'd'], 'b', 'd') would change the input array to ['a', 'd', 'c', 'b']



// Define a function named getSpeed that takes 2 arguments:
//  - an array of car names and their speeds, like this ["Chevy Tracker", 75, "BMW", 175, "Porsche", 210]
//  - a string representing a car name
//
// Return the speed that comes directly after that car name
//
// Example: getSpeed(["Chevy Tracker", 75, "BMW", 175, "Porsche", 210], "BMW") would return 175
// Example: getSpeed(["Chevy Tracker", 75, "BMW", 175, "Porsche", 210], "Porsche") would return 210



// Define a function named cellValue that takes 3 arguments:
//  - an array of field names such as ["first name", "last name", "age"]
//  - an array of values such as ["Joe", "Smith", 24]
//  - a string representing a field name, such as "first name"
//
// Return the value in the second array that corresponds to the position of the field name in the first array
//
// Example: cellValue(["make", "model", "year", "weight"], ["Chevy", "Nova", 1977, 1999], "model") would return "Nova"
// Example: cellValue(["make", "model", "year", "weight"], ["Chevy", "Nova", 1977, 1999], "year") would return 1977



// -------------
// // Use methods on arrays
// -------------
//


// Define a function named sandwich that takes 2 arguments:
//  - an array
//  - a value
//
// Take the value and add it to both the front and back of the array
//
// Example: sandwich(['a', 'b'], 'z') would change the input array to ['z', 'a', 'b', 'z']
//
// See unshift, push



// Define a function named sumEdges that takes 1 argument:
//  - an array
//
// Remove the first and last elements of the array, sum them
// Return the sum
//
// Example: sumEdges([3,4,5]) would change the input array to [4], and would return 8 (3+5)
//
// See shift, pop



// Define a function named bassackwards that takes 2 arguments:
//  - an array
//  - a delimiter
//
// Return a string that contains all of the elements in the array, reversed, and separated by the delimiter
//
// Example: bassackwards([3,4,5], "-") would return "5-4-3"
//
// See docs for most appropriate method


// Define a function named sortNumbers that takes  argument:
//  - an array
//
// Sort the array such that the numbers are sorted correctly
//
// Example: sortNumbers([1,11,2,22,56,7]) would return [ 1, 2, 7, 11, 22, 56 ]



// Define a function named gather that takes 3 arguments, all arrays:
//
// Return a single array that contains all elements of all arrays, sorted
//
// Example: gather(['z','y'], ['a'], ['p', 'q', 'd']) would return [ 'a', 'd', 'p', 'q', 'y', 'z' ]
//
// NOTE: do not use any kind of loop to accomplish this.  Find the appropriate method in the docs



// Define a function named window that takes 3 arguments:
//  - an array
//  - a start index
//  - an end index
//
// Return an array that only contains elements from the given start index to the given end index
//
// Example: window([ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' ], 3, 6) would return [ 'd', 'e', 'f' ]
//
// See slice



// Define a function named paginate that takes 3 arguments:
//  - an array
//  - a page number
//  - a page size
//
// Return an array that contains only the elements that would fall in the given page / size
// If pageSize is smaller than 1, return the results for page 1
//
// Example: paginate([ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' ], 1, 2) would return [ 'a', 'b' ]
// Example: paginate([ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' ], 2, 2) would return [ 'c', 'd' ]
// Example: paginate([ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' ], 3, 2) would return [ 'e', 'f' ]
// Example: paginate([ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' ], 1, 5) would return [ 'a', 'b', 'c', 'd', 'e' ]



// Define a function named deleteBetween that takes 3 arguments:
//  - an array
//  - a starting value
//  - an ending value
//
// Remove all elements in the array that are between these two values
//
// Example: deleteBetween([ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' ], 'a', 'i') would return [ 'a', 'i' ]
// Example: deleteBetween([ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' ], 'd', 'f') would return [ 'a', 'b', 'c', 'd', 'f', 'g', 'h', 'i' ]
//
// See splice
