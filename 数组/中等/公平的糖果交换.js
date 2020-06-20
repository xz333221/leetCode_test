/**
 *  fileName:公平的糖果交换
 *  time:2020/3/11
 *  todo:爱丽丝和鲍勃有不同大小的糖果棒：A[i] 是爱丽丝拥有的第 i 块糖的大小，B[j] 是鲍勃拥有的第 j 块糖的大小。

 因为他们是朋友，所以他们想交换一个糖果棒，这样交换后，他们都有相同的糖果总量。（一个人拥有的糖果总量是他们拥有的糖果棒大小的总和。）

 返回一个整数数组 ans，其中 ans[0] 是爱丽丝必须交换的糖果棒的大小，ans[1] 是 Bob 必须交换的糖果棒的大小。

 如果有多个答案，你可以返回其中任何一个。保证答案存在。

  

 示例 1：

 输入：A = [1,1], B = [2,2]
 输出：[1,2]
 示例 2：

 输入：A = [1,2], B = [2,3]
 输出：[1,2]
 示例 3：

 输入：A = [2], B = [1,3]
 输出：[2,3]
 示例 4：

 输入：A = [1,2,5], B = [2,4]
 输出：[5,4]
  

 提示：

 1 <= A.length <= 10000
 1 <= B.length <= 10000
 1 <= A[i] <= 100000
 1 <= B[i] <= 100000
 保证爱丽丝与鲍勃的糖果总量不同。
 答案肯定存在。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/fair-candy-swap
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
  let sum1 = A.reduce((prev,next) => prev + next)
  let sum2 = B.reduce((prev,next) => prev + next)
  let gap = (sum1 - sum2) / 2
  for (let i = 0; i < A.length; i++) {
    if(B.includes(A[i]-gap)){
      return [A[i],A[i]-gap]
    }
  }
};
console.log(fairCandySwap([1, 2, 5], [2, 4]))

// var fairCandySwap2 = function(A, B) {
//   let sum1 = A.reduce((accumulator, currentValue,index,arr) => {
//     console.log('accumulator:',accumulator)
//     console.log('currentValue:',currentValue)
//     console.log('index:',index)
//     console.log('arr:',arr)
//     /*
//     * accumulator: 1
//       currentValue: 2
//       index: 1
//       arr: [ 1, 2, 5 ]
//       accumulator: 3
//       currentValue: 5
//       index: 2
//       arr: [ 1, 2, 5 ]
//       sum1: 8*/
//     return accumulator + currentValue
//   })
//   let sum2 = B.reduce((prev,next) => prev + next)
//   console.log('sum1:',sum1)
// };
