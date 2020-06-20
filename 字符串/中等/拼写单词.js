/**
 *  fileName:拼写单词
 *  time:2020/6/20
 *  todo:给你一份『词汇表』（字符串数组） words 和一张『字母表』（字符串） chars。

 假如你可以用 chars 中的『字母』（字符）拼写出 words 中的某个『单词』（字符串），那么我们就认为你掌握了这个单词。

 注意：每次拼写（指拼写词汇表中的一个单词）时，chars 中的每个字母都只能用一次。

 返回词汇表 words 中你掌握的所有单词的 长度之和。
 示例 1：

 输入：words = ["cat","bt","hat","tree"], chars = "atach"
 输出：6
 解释：
 可以形成字符串 "cat" 和 "hat"，所以答案是 3 + 3 = 6。
 示例 2：

 输入：words = ["hello","world","leetcode"], chars = "welldonehoneyr"
 输出：10
 解释：
 可以形成字符串 "hello" 和 "world"，所以答案是 5 + 5 = 10。
  

 提示：

 1 <= words.length <= 1000
 1 <= words[i].length, chars.length <= 100
 所有字符串中都仅包含小写英文字母

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/find-words-that-can-be-formed-by-characters
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  let len = 0
  let get_word_num = (word) => {
    let map = new Map()
    for (let i = 0; i < word.length; i++) {
      let num = map.get(word[i])
      if (num) {
        map.set(word[i], num + 1)
      } else {
        map.set(word[i], 1)
      }
    }
    return map
  }
  let base_map = get_word_num(chars)
  console.log('base_map:', base_map)
  for (let i = 0; i < words.length; i++) {
    let map = get_word_num(words[i])
    console.log('map:', map)
    console.log('map.keys():', map.keys())
    let true_word = true
    for (const key of map.keys()) {

      if (!base_map.get(key) || map.get(key) > base_map.get(key)) {
        true_word = false
        console.log('key:', key)
        // console.log('words[i]:',words[i])
        break
      }
    }
    if (true_word) {
      len += words[i].length
    }
  }
  return len
}
console.log(countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach'))
