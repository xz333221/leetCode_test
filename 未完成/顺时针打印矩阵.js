/**
 *  fileName:顺时针打印矩阵
 *  time:2020/6/22
 *  todo:输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

  

 示例 1：

 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 输出：[1,2,3,6,9,8,7,4,5]
 示例 2：

 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
  

 限制：

 0 <= matrix.length <= 100
 0 <= matrix[i].length <= 100

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let x_max = matrix[0].length
  let y_max = matrix.length
  let x_min = 0, y_min = 0
  let arr = []

  while(x_max-x_min!==1||y_max-y_min!==1){
    if (x_max > x_min+1) {
      for (let i = x_min; i < x_max; i++) {
        arr.push(matrix[x_min][i])
      }
      x_max--
      y_min++
    }
    if (y_max > y_min+1) {
      for (let j = y_min; j < y_max; j++) {
        arr.push(matrix[j][x_max])
      }
      y_max --
      for (let i = x_max-1; i > x_min-1; i--) {
        arr.push(matrix[y_max][i])
      }
      x_min ++
      for (let i = y_max-1; i > y_min-1; i--) {
        arr.push(matrix[i][x_min-1])
      }
    }
  }
  console.log('x_min:',x_min)
  console.log('x_max:',x_max)
  console.log('y_min:',y_min)
  console.log('y_max:',y_max)
  // 未完成0.0
  return arr

}
console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
