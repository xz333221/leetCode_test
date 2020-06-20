/**
 *  fileName:存在重复元素 II
 *  time:2019-12-4
 *  todo:给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的绝对值最大为 k。

 示例 1:

 输入: nums = [1,2,3,1], k = 3
 输出: true
 示例 2:

 输入: nums = [1,0,1,1], k = 1
 输出: true
 示例 3:

 输入: nums = [1,2,3,1,2,3], k = 2
 输出: false

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/contains-duplicate-ii
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let len = nums.length
  let base_arr = []
  let map = new Map()
  for (let i = 0; i < len; i++) {
    if (!map.get(nums[i])) {
      map.set(nums[i], [i])
    } else {
      let arr = map.get(nums[i])
      arr.push(i)
      map.set(nums[i], arr)
      base_arr = arr
    }
  }
  let len2 = base_arr.length
  for (let i = 1; i < len2; i++) {
    for (let j = 0; j < i; j++) {
      if (base_arr[i] - base_arr[j] <= k) {
        return true
      }
    }
  }
  return false
}
