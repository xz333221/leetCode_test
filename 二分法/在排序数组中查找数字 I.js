/**
 *  fileName:在排序数组中查找数字 I
 *  time:2020/5/1
 *  todo:统计一个数字在排序数组中出现的次数。

  

 示例 1:

 输入: nums = [5,7,7,8,8,10], target = 8
 输出: 2
 示例 2:

 输入: nums = [5,7,7,8,8,10], target = 6
 输出: 0
  

 限制：

 0 <= 数组长度 <= 50000

  

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // let map = new Map()
  // for (let i = 0; i < nums.length; i++) {
  //   map.set(nums[i], map.get(nums[i])?map.get(nums[i])+1:1)
  // }
  // return map.get(target)?map.get(target):0

  // return nums.includes(target)?nums.lastIndexOf(target) - nums.indexOf(target) + 1:0

  // // 二分法
  // let left = 0
  // let right = nums.length
  // let mid
  // while ((right - left) / 2 >= 1) {
  //   mid = Math.floor((right + left) / 2)
  //   if (nums[mid] === target) {
  //     let num = 1
  //     let mid1 = mid - 1
  //     let mid2 = mid + 1
  //     while(nums[mid1]===target){
  //       num ++
  //       mid1 --
  //     }
  //     while(nums[mid2]===target){
  //       num ++
  //       mid2 ++
  //     }
  //     return num
  //   } else if (nums[mid] > target) {
  //     right = mid
  //   } else {
  //     left = mid
  //   }
  // }
  // return 0

  // 二分法
  let left = 0
  let right = nums.length
  let mid
  while (right - left >= 1) {
    mid = Math.floor((right + left) / 2)
    if(right - left === 1&&nums[mid] !== target){
      return 0
    } else if (nums[mid] === target) {
      let num = 1
      let mid1 = mid - 1
      let mid2 = mid + 1
      while(nums[mid1]===target){
        num ++
        mid1 --
      }
      while(nums[mid2]===target){
        num ++
        mid2 ++
      }
      return num
    } else if (nums[mid] > target) {
      right = mid
    } else {
      left = mid
    }
  }
  return 0
}
console.log(search([1, 1, 1, 1, 3, 3, 3, 5, 7, 7, 8, 8, 10], 8))

