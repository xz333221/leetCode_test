/**
 *  fileName:多数元素
 *  time:2019-12-4
 *  todo:给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

 示例 1:

 输入: [3,2,3]
 输出: 3
 示例 2:

 输入: [2,2,1,1,1,2,2]
 输出: 2

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/majority-element
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let len = nums.length
  if(len===1)return nums[0]
  let map = new Map()
  for (let i = 0; i < len; i++) {
    let num = map.get(nums[i])
    if (num) {
      if(num+1>len/2){
        return nums[i]
      }
      map.set(nums[i], num + 1)
    } else {
      map.set(nums[i], 1)
    }
  }
}

