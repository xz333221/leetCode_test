/**
 *  fileName:杨辉三角
 *  time:2019-11-29
 *  todo:
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
// var generate = function (numRows) {
//   let arr = []
//   let arr_base = []
//   for (let i = 0; i < numRows; i++) {
//     if (i === 0) {
//       arr_base = [1]
//     } else {
//       let arr_base_new = []
//       for (let j = 0; j < i + 1; j++) {
//         arr_base_new[j] = (arr_base[j - 1] || 0) + (arr_base[j] || 0)
//       }
//       arr_base = arr_base_new
//     }
//     arr.push(arr_base)
//   }
//   return arr
// }
// console.log('generate(1):', generate(1))

//给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。

var getRow = function (rowIndex) {
  // let arr = []
  let arr_base = []
  for (let i = 0; i < rowIndex+1; i++) {
    if (i === 0) {
      arr_base = [1]
    } else {
      let arr_base_new = []
      for (let j = 0; j < i + 1; j++) {
        arr_base_new[j] = (arr_base[j - 1] || 0) + (arr_base[j] || 0)
      }
      arr_base = arr_base_new
    }
    // arr.push(arr_base)
  }
  return arr_base
}
console.log('generate(1):', getRow(1))
