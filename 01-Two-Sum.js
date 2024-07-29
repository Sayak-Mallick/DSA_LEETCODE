// Given an array of integers nums and an integer target, return indices of the two numbers such that they
// add up to target.You may assume that each input would have exactly one solution,
// and you may not use the same element twice.You can return the answer in any order.

function twoSum(nums,target) {
  for(let i = 0; i<nums.length;i++) {
    for(let j=i+1; j<nums.length;j++) {
      if(nums[i] === target- nums[j]){
        return [i,j];
      }
    }
  }
}

function twoSumOptimised(nums,target) {
  const numbers = new Map();
  for(i = 0; i<nums.length;i++) {
    const difference = target - nums[i];
    if(numbers.has(difference)){
      return[i, numbers.get(difference)];
    }
    else {
      numbers.set(nums[i],i);
    }
  }
}

console.log(twoSum([2,7,11,15],9));
console.log(twoSumOptimised([2,7,11,15],9));
