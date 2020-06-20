/**
 *  fileName:按奇偶排序数组
 *  time:2020/3/13
 *  todo:给定一个非负整数数组 A，返回一个数组，在该数组中， A 的所有偶数元素之后跟着所有奇数元素。

 你可以返回满足此条件的任何数组作为答案。

  

 示例：

 输入：[3,1,2,4]
 输出：[2,4,3,1]
 输出 [4,2,3,1]，[2,4,1,3] 和 [4,2,1,3] 也会被接受。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/sort-array-by-parity
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  let a = 0
  for (let i = 0; a < A.length - 1; a++) {
    if (A[i] % 2 !== 0) {
      A.push(A[i])
      A.splice(i, 1)
    } else {
      i++
    }
  }
  return A
}
console.log(sortArrayByParity([1, 3, 2]))

