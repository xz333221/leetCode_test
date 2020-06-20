/**
 *  fileName:有效的字母异位词
 *  time:2019-12-30
 *  todo:给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

 示例 1:

 输入: s = "anagram", t = "nagaram"
 输出: true
 示例 2:

 输入: s = "rat", t = "car"
 输出: false
 说明:
 你可以假设字符串只包含小写字母。

 进阶:
 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/valid-anagram
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function (s, t) {
//   let map = new Map()
//   let len1 = s.length
//   let len2 = t.length
//   if (len1 !== len2) return false
//   for (let i = 0; i < len1; i++) {
//     let value = map.get(s[i])
//     if (value !== undefined) {
//       value[0] += 1
//     }else{
//       value = [1,0]
//     }
//     map.set(s[i],value)
//   }
//   for (let i = 0; i < len2; i++) {
//     let value2 = map.get(t[i])
//     if (value2 !== undefined) {
//       value2[1] += 1
//     }else{
//       return false
//     }
//     map.set(t[i],value2)
//   }
//   for (let tKey of map.values()) {
//     if(tKey[0]!==tKey[1]) return false
//   }
//   return true
// }
var isAnagram = function (s, t) {

  const f = str => {
    let map = new Map()
    for (let i = 0; i < str.length; i++) {
      let num = map.get(str[i])
      if(num){
        map.set(str[i],num+1)
      }else{
        map.set(str[i],1)
      }
    }
    return map
  }
  let map1 = f(s)
  let map2 = f(t)


  for (const key of map1) {
    if(key[1]!==map2.get(key[0])){
      return false
    }
  }
  return true
}
console.log(isAnagram('anagrabm', 'nagarcam'))
