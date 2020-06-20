/**
 *  fileName:最大子序和
 *  time:2019-10-21
 *  todo:给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

 示例:

 输入: [-2,1,-3,4,-1,2,1,-5,4],
 输出: 6
 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
// let maxSubArray = function(nums) {
//   let max = nums[0]   // 用于比较 （当前项）和（以当前项前一项结尾的最大数组和+当前项）后 储存最大值
//   let max_all = nums[0]   // 找到最大的max
//
//   for (let i = 1,len = nums.length; i < len; i++) {
//     max = Math.max(nums[i],max + nums[i])
//     max_all = Math.max(max_all,max)
//   }
//
//   return max_all
// };
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))


/*
解题思路：
示例: [a, b , c, d , e]

解答这类题目, 省略不掉遍历, 因此我们先从遍历方式说起

通常我们遍历子串或者子序列有三种遍历方式

以某个节点为开头的所有子序列: 如 [a]，[a, b]，[ a, b, c] ... 再从以 b 为开头的子序列开始遍历 [b] [b, c]。
根据子序列的长度为标杆，如先遍历出子序列长度为 1 的子序列，在遍历出长度为 2 的 等等。
以子序列的结束节点为基准，先遍历出以某个节点为结束的所有子序列，因为每个节点都可能会是子序列的结束节点，因此要遍历下整个序列，如: 以 b 为结束点的所有子序列: [a , b] [b] 以 c 为结束点的所有子序列: [a, b, c] [b, c] [ c ]。
第一种遍历方式通常用于暴力解法, 第二种遍历方式 leetcode (5. 最长回文子串 ) 中的解法就用到了。

第三种遍历方式 因为可以产生递推关系, 采用动态规划时, 经常通过此种遍历方式, 如 背包问题, 最大公共子串 , 这里的动态规划解法也是以 先遍历出 以某个节点为结束节点的所有子序列 的思路

对于刚接触动态规划的, 我感觉熟悉第三种遍历方式是需要抓住的核心

因为我们通常的惯性思维是以子序列的开头为基准，先遍历出以 a 为开头的所有子序列，再遍历出以 b 为开头的...但是动态规划为了找到不同子序列之间的递推关系，恰恰是以子序列的结束点为基准的，这点开阔了我们的思路。

 */
let maxSubArray = function(nums) {
  let max_ind_arr = [nums[0]]
  let max_all = nums[0]
  for (let i = 1; i < nums.length; i++) {
    max_ind_arr[i] = Math.max(max_ind_arr[i-1]+nums[i],nums[i])
    max_all = Math.max(max_ind_arr[i],max_all)
  }
  return max_all
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
