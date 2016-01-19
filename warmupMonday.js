//Given two strings (they can be of same or different length) help her in finding out the minimum number of character deletions
//required to make two strings anagrams. Any characters can be deleted from any of the strings.

// Input Format:Two lines each containing a string.
//
// Constraints
// 1 <= Length of A,B <= 10000
// A and B will only consist of lowercase latin letter.
//
// Output Format: A single integer which is the number of character deletions.

function processData(input) {

  var stringArray = input.split(',');
  // var counter = 0;
  var array = [];

  var first = stringArray[0];
  var second = stringArray[1];
  for (var i = 0; i <= first.length - 1; i++) {

    for (var j = 0; j <= second.length - 1; j++) {
      if (first[i] === second[j]) {
        array.push(first[i]);
        array.push(second[j]);
        // counter++;
      }
    }
  }
  console.log((first.length + second.length) - array.length);

}

processData("cde,abc"); //4

//if you find a match, you could modify the string by removing it
