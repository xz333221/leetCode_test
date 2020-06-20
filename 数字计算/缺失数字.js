/**
 *  fileName:缺失数字
 *  time:2019-12-9
 *  todo:给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。

 示例 1:

 输入: [3,0,1]
 输出: 2
 示例 2:

 输入: [9,6,4,2,3,5,7,0,1]
 输出: 8
 说明:
 你的算法应具有线性时间复杂度。你能否仅使用额外常数空间来实现?

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/missing-number
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// var missingNumber = function(nums) {
//   let len = nums.length + 1
//   let arr = nums.sort((a,b) => a - b)
//   for (let i = 0; i < len; i++) {
//     if(arr[i]!==i){
//       return i
//     }
//   }
// };
var missingNumber = function(nums) {
  let len = nums.length + 1
  let sum = len * (len - 1) / 2
  for (let i = 0; i < len - 1; i++) {
    sum -= nums[i]
  }
  return sum
};

missingNumber([45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14])
