/**
 *  fileName:有效的山脉数组
 *  time:2020-4-9
 *  todo:
 给定一个整数数组 A，如果它是有效的山脉数组就返回 true，否则返回 false。

 让我们回顾一下，如果 A 满足下述条件，那么它是一个山脉数组：

 A.length >= 3
 在 0 < i < A.length - 1 条件下，存在 i 使得：
 A[0] < A[1] < ... A[i-1] < A[i]
 A[i] > A[i+1] > ... > A[A.length - 1]
 */
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
  if (A.length < 3) return false

  // 找到从左向右和从右向左的最大的数的index
  let max1 = 0
  let max2 = A.length - 1
  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] === A[i + 1]) {
      return false
    } else if (A[i] > A[i + 1]) {
      max1 = i
      break
    }
  }
  for (let i = A.length - 1; i > 0; i--) {
    if (A[i] === A[i - 1]) {
      return false
    } else if (A[i] > A[i - 1]) {
      max2 = i
      break
    }
  }
  return max1 === max2
}

console.log(validMountainArray([0, 3, 2, 1]))
