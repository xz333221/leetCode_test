/**
 *  fileName:最长公共前缀
 *  time:2019-10-18
 *  todo:
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if(!strs.length) return ''
  let num = 1
  let len1 = strs[0].length
  while (num <= len1) {
    let str = strs[0].slice(0, num)
    for (let i = 0, len = strs.length; i < len; i++) {
      if (!strs[i].startsWith(str)) {
        return num === 1 ? '' : strs[0].slice(0, num - 1)
      }
    }
    num++
  }
  return num === 1 ? '' : strs[0].slice(0, num - 1)
}
// var longestCommonPrefix = function(strs) {
//   let str = ''
//   let num = 0
//   function f () {
//     if(!strs.length)
//       return str
//     if(strs[0][num]===undefined)
//       return str
//     for (let i = 1; i < strs.length; ) {
//
//       if(strs[i][num]===(strs[0][num])){
//         i++
//       }else{
//         return str
//       }
//     }
//     str += strs[0][num]
//     num ++
//     f()
//   }
//   f()
//   return str
// };

let strs = ['flower', 'flow', 'flight']

console.log(longestCommonPrefix(['aa', 'ab']))
