/**
 *  fileName:搜索插入位置
 *  time:2019-10-21
 *  todo:给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

 你可以假设数组中无重复元素。

 示例 1:

 输入: [1,3,5,6], 5
 输出: 2
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// var searchInsert = function(nums, target) {
//   if(nums.includes(target)){
//     return nums.indexOf(target)
//   }else {
//     nums.push(target)
//     return nums.sort((a,b) => a - b).indexOf(target)
//   }
// };

var searchInsert = function (nums, target) {
  // [1,2,3] , [1,2,3,4]
  // 二分法？
  // 指针
  let left_index = 0 // 0 0
  let right_index = nums.length - 1 // 2 3

  // 判断在范围内
  if (target <= nums[0]) {
    return 0
  }
  if (target > nums[right_index]) {
    return right_index + 1
  }
  if (target === nums[right_index]) {
    return right_index
  }

  // 中间的数
  let mid_ind

  function test_mid() {
    console.log('left_index:',left_index)
    console.log('right_index:',right_index)

    if(left_index === right_index - 1){
      console.log('left_index + 1:',left_index + 1)
      return left_index + 1
    }

    if ((right_index + left_index) % 2 === 0) {
      mid_ind = (right_index + left_index) / 2
    } else {
      mid_ind = (right_index + left_index + 1)  / 2
    }

    if(nums[mid_ind] === target){
      return mid_ind
    }

    if(nums[mid_ind] > target){
      right_index = mid_ind
      return test_mid()
    }else {
      left_index = mid_ind
      return test_mid()
    }
  }

  let result =  test_mid()
  return result

}

console.log(searchInsert([1,2,4,5], 3))
