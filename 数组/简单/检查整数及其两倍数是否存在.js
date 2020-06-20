/**
 *  fileName:检查整数及其两倍数是否存在
 *  time:2020/5/12
 *  todo:给你一个整数数组 arr，请你检查是否存在两个整数 N 和 M，满足 N 是 M 的两倍（即，N = 2 * M）。

 更正式地，检查是否存在两个下标 i 和 j 满足：

 i != j
 0 <= i, j < arr.length
 arr[i] == 2 * arr[j]
  

 示例 1：

 输入：arr = [10,2,5,3]
 输出：true
 解释：N = 10 是 M = 5 的两倍，即 10 = 2 * 5 。
 示例 2：

 输入：arr = [7,1,14,11]
 输出：true
 解释：N = 14 是 M = 7 的两倍，即 14 = 2 * 7 。
 示例 3：

 输入：arr = [3,1,7,11]
 输出：false
 解释：在该情况下不存在 N 和 M 满足 N = 2 * M 。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/check-if-n-and-its-double-exist
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[j] === arr[i] / 2 || arr[j] === arr[i] * 2) {
        return true
      }
    }
  }
  return false
}

console.log(checkIfExist([4, -7, 11, 4, 18]))
