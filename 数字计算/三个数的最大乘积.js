/**
 *  fileName:三个数的最大乘积
 *  time:2019-12-18
 *  todo:给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。

 示例 1:

 输入: [1,2,3]
 输出: 6
 示例 2:

 输入: [1,2,3,4]
 输出: 24
 注意:

 给定的整型数组长度范围是[3,104]，数组中所有的元素范围是[-1000, 1000]。
 输入的数组中任意三个数的乘积不会超出32位有符号整数的范围。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/maximum-product-of-three-numbers
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  let len = nums.length
  nums.sort((a, b) => a - b)
  return Math.max(nums[len - 1] * nums[len - 2] * nums[len - 3],nums[len - 1] * nums[0] * nums[1])
}
// var maximumProduct = function(nums) {
//   let max_num_arr = []
//   let len = nums.length
//   for (let i = 0; i < len; i++) {
//
//     if(max_num_arr.length<3){
//       max_num_arr.push(nums[i])
//       max_num_arr = max_num_arr.sort((a,b) => b - a)
//     }else {
//       if(nums[i]>max_num_arr[0]){
//         max_num_arr.splice(0,0,nums[i])
//       }else if(nums[i]>max_num_arr[1]){
//         max_num_arr.splice(1,0,nums[i])
//       }else if(nums[i]>max_num_arr[2]){
//         max_num_arr.splice(2,0,nums[i])
//       }
//       max_num_arr.pop()
//     }
//   }
//   return max_num_arr[0]*max_num_arr[1]*max_num_arr[2]
// };

console.log(maximumProduct([1, 2, 3, 4]))
