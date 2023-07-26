function sortedSquaredArray(array) {
  // declaring a new array to store squared values
  let newArray = [];
  // conditional to check length of array and stop conditions if the array is empty
  if (array.length === 0) {
    return [];
  }
  // sorting original array
  array = array.sort();
  // console.log(array);
  // for-loop to square each value in the array's indices.
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] * array[i]);
  }
  console.log(newArray);
  // returning new sorted newArray and squared.
  return newArray;
}

// sortedSquaredArray([1,2,3,4,5,6,8,9]);
sortedSquaredArray([1, 2, 7, 4, 5, 6, 8, 9]);

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
