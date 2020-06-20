/**
 *  fileName:子数组最大平均数 I
 *  time:2019-12-20
 *  todo:给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。

 示例 1:

 输入: [1,12,-5,-6,50,3], k = 4
 输出: 12.75
 解释: 最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
  

 注意:

 1 <= k <= n <= 30,000。
 所给数据范围 [-10,000，10,000]。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/maximum-average-subarray-i
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let ind = 0
  let max_all = null
  let len = nums.length
  while (ind + k <= len) {
    let sum = 0
    for (let i = ind; i < ind + k; i++) {
      sum += nums[i]
    }
    if (max_all === null) {
      max_all = sum
    } else {
      max_all = Math.max(sum, max_all)
    }
    ind++
  }
  return max_all / k
}
