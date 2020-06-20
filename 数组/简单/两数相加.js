/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if(map.get(nums[i])!==undefined){
      return [map.get(nums[i]),i]
    }
    map.set((target-nums[i]),i)
  }
};

let nums = [3,2,4], target = 6
console.log(twoSum(nums, target))
