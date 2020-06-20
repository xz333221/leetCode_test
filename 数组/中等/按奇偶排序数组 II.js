/**
 *  fileName:按奇偶排序数组 II
 *  time:2020/4/6
 *  todo:922. 按奇偶排序数组 II
 给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。

 对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。

 你可以返回任何满足上述条件的数组作为答案。



 示例：

 输入：[4,2,5,7]
 输出：[4,5,2,7]
 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。


 提示：

 2 <= A.length <= 20000
 A.length % 2 == 0
 0 <= A[i] <= 1000

 */

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  let arr_1 = []
  let arr_2 = []
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      arr_1.push(A[i])
    } else {
      arr_2.push(A[i])
    }
  }
  let result = []
  for (let i = 0; i < A.length; i++) {
    if (i % 2 === 0) {
      result[i] = arr_1[i / 2]
    } else {
      result[i] = arr_2[(i - 1) / 2]
    }
  }
  return result
}

console.log(sortArrayByParityII([4, 2, 5, 7]))
