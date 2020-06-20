/**
 *  fileName:连续数列
 *  time:2020/5/20
 *  todo:给定一个整数数组，找出总和最大的连续数列，并返回总和。

 示例：

 输入： [-2,1,-3,4,-1,2,1,-5,4]
 输出： 6
 解释： 连续子数组 [4,-1,2,1] 的和最大，为 6。
 进阶：

 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/contiguous-sequence-lcci
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max_arr = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    max_arr[i] = Math.max(max_arr[i-1]+nums[i],nums[i])
  }
  return Math.max(...max_arr)
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
