/**
 *  fileName:合并排序的数组
 *  time:2020/5/21
 *  todo:给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。

 初始化 A 和 B 的元素数量分别为 m 和 n。

 示例:

 输入:
 A = [1,2,3,0,0,0], m = 3
 B = [2,5,6],       n = 3

 输出: [1,2,2,3,5,6]
 说明:

 A.length == n + m

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/sorted-merge-lcci
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {
  let num = 0
  for (let i = 0; i < A.length; i++) {
    console.log('A:',A)
    while (B.length){
      if(A[i]>B[0]){
        A.splice(i,0,B[0])
        A.pop()
        B.shift()
        num ++
      }else if(i-num===m){
        A.splice(i,1,B[0])
        B.shift()
        num++
        break
      }else{
        break
      }
    }
  }
  return A
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
