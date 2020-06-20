/**
 *  fileName:至少是其他数字两倍的最大数
 *  time:2020-1-3
 *  todo:在一个给定的数组nums中，总是存在一个最大元素 。

 查找数组中的最大元素是否至少是数组中每个其他数字的两倍。

 如果是，则返回最大元素的索引，否则返回-1。

 示例 1:

 输入: nums = [3, 6, 1, 0]
 输出: 1
 解释: 6是最大的整数, 对于数组中的其他整数,
 6大于数组中其他元素的两倍。6的索引是1, 所以我们返回1.
  

 示例 2:

 输入: nums = [1, 2, 3, 4]
 输出: -1
 解释: 4没有超过3的两倍大, 所以我们返回 -1.

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/largest-number-at-least-twice-of-others
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let len = nums.length
  let ind = 0
  for (let i = 1; i < len; i++) {
    if(nums[i]>nums[ind]){
      ind = i
    }
  }
  for (let i = 0; i < len; i++) {
    if(ind!==i&&nums[ind]<2*nums[i]){
      return -1
    }
  }
  return ind
}
// var dominantIndex = function (nums) {
//   let len = nums.length
//   if (len === 1) return 0
//   let arr = [nums[0], nums[1]].sort((a, b) => b - a)
//   let ind = (nums[0] > nums[1]) ? 0 : 1
//   for (let i = 2; i < len; i++) {
//     if (nums[i] > arr[0]) {
//       ind = i
//       arr.unshift(nums[i])
//       arr.pop()
//     } else if (nums[i] > arr[1]) {
//       arr[1] = nums[i]
//     }
//     console.log('arr:',arr)
//   }
//   return (arr[0] >= arr[1] * 2) ? ind : -1
// }
// var dominantIndex = function (nums) {
//   if(nums.length===1) return 0
//   let arr = [...nums]
//   arr.sort((a, b) => b - a)
//   if (arr[0] >= arr[1] * 2) {
//     return nums.indexOf(arr[0])
//   }else{
//     return -1
//   }
// }
console.log(dominantIndex([0, 0, 0, 1]))
