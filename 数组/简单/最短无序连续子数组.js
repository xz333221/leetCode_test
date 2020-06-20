/**
 *  fileName:最短无序连续子数组
 *  time:2019-12-16
 *  todo:给定一个整数数组，你需要寻找一个连续的子数组，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

 你找到的子数组应是最短的，请输出它的长度。

 示例 1:

 输入: [2, 6, 4, 8, 10, 9, 15]
 输出: 5
 解释: 你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
 说明 :

 输入的数组长度范围在 [1, 10,000]。
 输入的数组可能包含重复元素 ，所以升序的意思是<=。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let len = nums.length
  let arr = [...nums]
  arr = arr.sort((a,b) => a - b)
  let left_ind = 0
  let right_ind = len - 1
  for (let i = 0; i < len; i++) {
    if(nums[i]!==arr[i]){
      break
    }else{
      left_ind += 1
    }
  }
  for (let i = len - 1 ; i > left_ind; i--) {
    if(nums[i]!==arr[i]){
      break
    }else{
      right_ind -= 1
    }
  }
  if(left_ind>=right_ind){
    return 0
  }
  return right_ind - left_ind + 1
};
console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]))
