/**
 *  fileName:最大连续1的个数
 *  time:2019-12-11
 *  todo:给定一个二进制数组， 计算其中最大连续1的个数。

 示例 1:

 输入: [1,1,0,1,1,1]
 输出: 3
 解释: 开头的两位和最后的三位都是连续1，所以最大连续1的个数是 3.
 注意：

 输入的数组只包含 0 和1。
 输入数组的长度是正整数，且不超过 10,000。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/max-consecutive-ones
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let max_num = 0
  let len = nums.length
  let base_num = 0
  for (let i = 0; i < len; i++) {
    if(nums[i]===0){
      base_num = 0
    }else{
      base_num++
      max_num = Math.max(max_num,base_num)
    }
  }
  return max_num
};
