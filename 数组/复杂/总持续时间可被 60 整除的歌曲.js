/**
 *  fileName:总持续时间可被 60 整除的歌曲
 *  time:2020-4-13
 *  todo:在歌曲列表中，第 i 首歌曲的持续时间为 time[i] 秒。

 返回其总持续时间（以秒为单位）可被 60 整除的歌曲对的数量。形式上，我们希望索引的数字  i < j 且有 (time[i] + time[j]) % 60 == 0。

 示例 1：

 输入：[30,20,150,100,40]
 输出：3
 解释：这三对的总持续时间可被 60 整数：
 (time[0] = 30, time[2] = 150): 总持续时间 180
 (time[1] = 20, time[3] = 100): 总持续时间 120
 (time[1] = 20, time[4] = 40): 总持续时间 60
 示例 2：

 输入：[60,60,60]
 输出：3
 解释：所有三对的总持续时间都是 120，可以被 60 整数。
  

 提示：

 1 <= time.length <= 60000
 1 <= time[i] <= 500

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/pairs-of-songs-with-total-durations-divisible-by-60
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} time
 * @return {number}
 */
// var numPairsDivisibleBy60 = function (time) {
//   let num = 0
//   for (let i = 0; i < time.length - 1; i++) {
//     for (let j = i + 1; j < time.length; j++) {
//       if((time[i] + time[j])%60===0){
//         num ++
//       }
//     }
//   }
//   return num
// }
var numPairsDivisibleBy60 = time => {
  let c = new Array(60).fill(0)
  return time.reduce((count, cur) => {
    count += c[(60 - cur % 60) % 60]
    c[cur % 60] += 1
    return count
  }, 0)
}
console.log(numPairsDivisibleBy60([30, 20, 150, 100, 40]))
