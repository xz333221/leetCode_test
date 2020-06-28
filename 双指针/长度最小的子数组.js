/**
 *  fileName:长度最小的子数组
 *  time:2020/6/27
 *  todo:
 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组，并返回其长度。如果不存在符合条件的连续子数组，返回 0。

 示例:

 输入: s = 7, nums = [2,3,1,2,4,3]
 输出: 2
 解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
 进阶:

 如果你已经完成了O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。
 https://leetcode-cn.com/problems/minimum-size-subarray-sum/solution/209shuang-zhi-zhen-hua-dong-chuang-kou-by-fo-qian-/
 */
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let len = nums.length
  let min_len_arr = []
  let sum = 0

  // 思路： 每个数字为起始找到最短 push 到数组中
  for (let i = 0; i < len - 1; i++) {

    let j = i
    while (j < len) {
      sum += nums[j]
      if (sum >= s) {
        min_len_arr.push(j - i + 1)
        break
      }else{
        j++
      }
    }
    sum = 0
  }
  if(min_len_arr.length===0){
    return 0
  }else {
    return Math.min(...min_len_arr)
  }
}
let s = 7, nums = [2, 3, 1, 2, 4, 3]
console.log(minSubArrayLen(s, nums))
