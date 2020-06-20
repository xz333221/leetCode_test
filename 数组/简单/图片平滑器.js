/**
 *  fileName:图片平滑器
 *  time:2019-12-21
 *  todo:包含整数的二维矩阵 M 表示一个图片的灰度。你需要设计一个平滑器来让每一个单元的灰度成为平均灰度 (向下舍入) ，平均灰度的计算是周围的8个单元和它本身的值求平均，如果周围的单元格不足八个，则尽可能多的利用它们。

 示例 1:

 输入:
 [[1,1,1],
 [1,0,1],
 [1,1,1]]
 输出:
 [[0, 0, 0],
 [0, 0, 0],
 [0, 0, 0]]
 解释:
 对于点 (0,0), (0,2), (2,0), (2,2): 平均(3/4) = 平均(0.75) = 0
 对于点 (0,1), (1,0), (1,2), (2,1): 平均(5/6) = 平均(0.83333333) = 0
 对于点 (1,1): 平均(8/9) = 平均(0.88888889) = 0
 注意:

 给定矩阵中的整数范围为 [0, 255]。
 矩阵的长和宽的范围均为 [1, 150]。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/image-smoother
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
  let arr = []
  let len = M.length
  for (let i = 0; i < len; i++) {
    let len2 = M[i].length
    for (let j = 0; j < len2; j++) {
      let num = 0
      let sum = 0
      if (M[i - 1]) {
        if (M[i - 1][j - 1]!==undefined) {
          sum += M[i - 1][j - 1]
          num++
        }
        if (M[i - 1][j]!==undefined) {
          sum += M[i - 1][j]
          num++
        }
        if (M[i - 1][j + 1]!==undefined) {
          sum += M[i - 1][j + 1]
          num++
        }
      }
      if (M[i + 1]) {
        if (M[i + 1][j - 1]!==undefined) {
          sum += M[i + 1][j - 1]
          num++
        }
        if (M[i + 1][j]!==undefined) {
          sum += M[i + 1][j]
          num++
        }
        if (M[i + 1][j + 1]!==undefined) {
          sum += M[i + 1][j + 1]
          num++
        }
      }
      if (M[i][j - 1]!==undefined) {
        sum += M[i][j - 1]
        num++
      }
      if (M[i][j + 1]!==undefined) {
        sum += M[i][j + 1]
        num++
      }
      if (M[i][j]!==undefined) {
        sum += M[i][j]
        num++
      }
      if(!arr[i]){
        arr[i] = []
      }
      arr[i][j] = Math.floor(sum/num)
    }
  }
  return arr
}
console.log(imageSmoother([[1, 1, 1], [1, 0, 1], [1, 1, 1]]))
