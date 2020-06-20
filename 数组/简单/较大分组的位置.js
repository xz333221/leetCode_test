/**
 *  fileName:较大分组的位置
 *  time:2020-1-6
 *  todo:在一个由小写字母构成的字符串 S 中，包含由一些连续的相同字符所构成的分组。

 例如，在字符串 S = "abbxxxxzyy" 中，就含有 "a", "bb", "xxxx", "z" 和 "yy" 这样的一些分组。

 我们称所有包含大于或等于三个连续字符的分组为较大分组。找到每一个较大分组的起始和终止位置。

 最终结果按照字典顺序输出。

 示例 1:

 输入: "abbxxxxzzy"
 输出: [[3,6]]
 解释: "xxxx" 是一个起始于 3 且终止于 6 的较大分组。
 示例 2:

 输入: "abc"
 输出: []
 解释: "a","b" 和 "c" 均不是符合要求的较大分组。
 示例 3:

 输入: "abcdddeeeeaabbbcd"
 输出: [[3,5],[6,9],[12,14]]
 说明:  1 <= S.length <= 1000

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/positions-of-large-groups
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function (S) {
  let len = S.length
  let arr = []
  if (len < 2) return arr

  let left_ind = 0
  let right_ind = 1

  for (let i = 0; i < len; i++) {
    if (S[left_ind] === S[right_ind]) {
      right_ind++
    } else {
      if (right_ind - left_ind >= 3) {
        arr.push([left_ind, right_ind - 1])
      }
      left_ind = right_ind
      right_ind = left_ind + 1
    }
  }
  return arr
}
// var largeGroupPositions = function (S) {
//   let len = S.length
//   let arr = []
//   let map = new Map()
//   for (let i = 0; i < len; i++) {
//     let result = map.get(S[i])
//     if (!result) {
//       map.set(S[i], [i, i])
//     } else {
//       map.set(S[i], [result[0], result[1] + 1])
//       if (S[i + 1] !== S[i] && result[1] + 1 - result[0] >= 2) {
//         arr.push([result[0], result[1] + 1])
//       }
//     }
//     if (S[i + 1] !== S[i]) {
//       map.set(S[i], undefined)
//     }
//   }
//   return arr
// }
console.log(largeGroupPositions('abbxxxxzzy'))
