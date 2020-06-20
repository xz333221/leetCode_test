/**
 *  fileName:有效的括号
 *  time:2019-12-30
 *  todo:给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

 有效字符串需满足：

 左括号必须用相同类型的右括号闭合。
 左括号必须以正确的顺序闭合。
 注意空字符串可被认为是有效字符串。

 示例 1:

 输入: "()"
 输出: true
 示例 2:

 输入: "()[]{}"
 输出: true
 示例 3:

 输入: "(]"
 输出: false
 示例 4:

 输入: "([)]"
 输出: false
 示例 5:

 输入: "{[]}"
 输出: true

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/valid-parentheses
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false
  while (s.includes('()') || s.includes('[]') || s.includes('{}')) {
    s = s.replace(/\(\)/g, '').replace(/\[\]/g, '').replace(/\{\}/g, '')
  }
  return s ? false : true
}
// var isValid = function (s) {
//   let len = s.length
//   if (len === 0) return true
//   if (len % 2 !== 0) return false
//   let map = new Map([['(', ')'], ['[', ']'], ['{', '}']])
//   let arr = [s[0]]
//   for (let i = 1; i < len; i++) {
//     if (s[i] === map.get(arr[0])) {
//       arr.shift()
//     } else {
//       arr.unshift(s[i])
//     }
//   }
//   return arr.length === 0
// }
console.log(isValid('()([])'))
