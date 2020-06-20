/**
 *  fileName:可被 5 整除的二进制前缀
 *  time:2020/5/16
 *  todo:给定由若干 0 和 1 组成的数组 A。我们定义 N_i：从 A[0] 到 A[i] 的第 i 个子数组被解释为一个二进制数（从最高有效位到最低有效位）。

 返回布尔值列表 answer，只有当 N_i 可以被 5 整除时，答案 answer[i] 为 true，否则为 false。

 示例 1：

 输入：[0,1,1]
 输出：[true,false,false]
 解释：
 输入数字为 0, 01, 011；也就是十进制中的 0, 1, 3 。只有第一个数可以被 5 整除，因此 answer[0] 为真。
 示例 2：

 输入：[1,1,1]
 输出：[false,false,false]
 示例 3：

 输入：[0,1,1,1,1,1]
 输出：[true,false,false,false,true,false]
 示例 4：

 输入：[1,1,1,0,1]
 输出：[false,false,false,false,false]
  

 提示：

 1 <= A.length <= 30000
 A[i] 为 0 或 1

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/binary-prefix-divisible-by-5
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
  let arr = [A[0]===0]
  let sum = A[0]
  for (let i = 1; i < A.length; i++) {
    sum = sum * 2 + A[i]
    // let sum_str = sum.toString()
    // let last = num_str.charAt(num_str.length - 1)
    if(sum%5===0) {
      arr.push(true)
    }else{
      arr.push(false)
    }
  }
  return arr
};
// var prefixesDivBy5 = function(A) {
//   let arr = []
//   let sum = '0b'
//   for (let i = 0; i < A.length; i++) {
//     sum += A[i].toString()
//     let num_str = BigInt(sum).toString()
//     let last = num_str.charAt(num_str.length - 1)
//     if(last%5===0) {
//       arr.push(true)
//     }else{
//       arr.push(false)
//     }
//   }
//   return arr
// };
console.log(prefixesDivBy5([0, 1, 1, 1, 1, 1]));
