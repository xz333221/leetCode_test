/**
 *  fileName:查找常用字符
 *  time:2020-4-13
 *  todo:给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。

 你可以按任意顺序返回答案。

  

 示例 1：

 输入：["bella","label","roller"]
 输出：["e","l","l"]
 示例 2：

 输入：["cool","lock","cook"]
 输出：["c","o"]
  

 提示：

 1 <= A.length <= 100
 1 <= A[i].length <= 100
 A[i][j] 是小写字母

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/find-common-characters
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
  let arr = []
  for (let i = 0; i < A.length; i++) {
    let map = new Map()
    for (let j = 0; j < A[i].length; j++) {
      if (map.get(A[i][j])) {
        map.set(A[i][j], map.get(A[i][j]) + 1)
      } else {
        map.set(A[i][j], 1)
      }
    }
    arr.push(map)
  }
  console.log('arr:',arr)
  let first = [...arr[0]]
  first.forEach((item,index) => {
    for (let i = 1; i < arr.length; i++) {
      if(!arr[i].get(item[0])){
        item[1] = 0
      }else {
        item[1] = Math.min(item[1],arr[i].get(item[0]))
      }
    }
  })
  console.log('first:',first)
  let str = ''
  for (let i = 0; i < first.length; i++) {
    str += first[i][0].repeat(first[i][1])
  }
  return str.split('')
}
console.log(commonChars(["acabcddd","bcbdbcbd","baddbadb","cbdddcac","aacbcccd","ccccddda","cababaab","addcaccd"]))
