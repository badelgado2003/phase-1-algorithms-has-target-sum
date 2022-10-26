function hasTargetSum(array, target) {
  let result = [];
  
    for(let x=0; x<array.length; x++) {
      const currentNum = target - array[x];
      for(let r=x+1; r<array.length; r++){
        if(array[r] === currentNum) return true
      }
    }
    return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
 if a pair in the array eqyal the target
  return true
else
  return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
