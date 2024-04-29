function arraysAreEqual(arr1, arr2) {
    // Check if arrays have the same length
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    // Iterate through elements and compare
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  
    // If all elements are equal, the arrays are equal
    return true;
  }
  
  const array1 = [1, 2, 3,6];
  const array2 = [1, 2, 3];
  
  if (arraysAreEqual(array1, array2)) {
    console.log('Arrays are equal');
  } else {
    console.log('Arrays are not equal');
  }
  