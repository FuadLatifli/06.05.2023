function findDuplicate(arr) {
    let freq = {};
    for (let i = 0; i < arr.length; i++) {
      if (freq[arr[i]]) {
        return arr[i];
      } else {
        freq[arr[i]] = true;
      }
    }
  }
  
  function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  function doubleArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i] * 2);
    }
    return result;
  }
  
  let myArr = [1,3,4,2,2];
  console.log(findDuplicate(myArr)); // output: 2
  
  myArr = [1,2,3,4];
  console.log(findMax(myArr)); // output: 4
  
  myArr = [10,20,30,40,50];
  console.log(doubleArray(myArr)); // output: [20, 40, 60, 80, 100]